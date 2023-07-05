import React, { useMemo, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { Draggable } from "react-beautiful-dnd";
import PropTypes from "prop-types";
import EllipsisText from "react-ellipsis-text";
import styled from "@emotion/styled";
import moment from "moment";
import { MoveList } from "./MoveList";

/* import Modal from 'components/Modal/Modal'; */
import css from "./Task.module.css";
import { CardForm } from "components/forms/CardForm/CardForm";
import Icon from "components/Icon/Icon";
import { useModal } from "hooks/useModal";
import {
  deleteTask,
  updateTask,
  updateTaskPlace,
} from "redux/boards/operations";

const levelsToIndexes = {
  none: "Without priority",
  low: "Low",
  medium: "Medium",
  high: "High",
};
const proprityColors = {
  none: {
    border: "1px solid #878787",
    bg: "#878787",
    bl: "4px solid #878787",
  },
  low: {
    border: "1px solid #8FA1D0",
    bg: "#8FA1D0",
    bl: "4px solid #8FA1D0",
  },
  medium: {
    border: "1px solid #E09CB5",
    bg: "#E09CB5",
    bl: "4px solid #E09CB5",
  },
  high: {
    border: "1px solid #BEDBB0",
    bg: "#BEDBB0",
    bl: "4px solid #BEDBB0",
  },
};

const getPopoverItems = {
  dark: {
    hc: "#bedbb0",
    bg: "#1F1F1F",
    tc: "rgba(255, 255, 255, 0.50)",
  },
  violet: {
    hc: "#5255bc",
    bg: "#FCFCFC",
    tc: "#161616",
  },
  light: {
    hc: "#bedbb0",
    bg: "#FCFCFC",
    tc: "#161616",
  },
};

const PopupWrapper = styled.div`
  background-color: ${({ popStyles }) => popStyles.bg};
`;

const ItemWrapper = styled.li`
  color: ${({ popStyles }) => popStyles.tc};
  &:hover {
    color: ${({ popStyles }) => popStyles.hc};
  }
`;

const Task = ({ avaliableColumns, taskData, colId, index }) => {
  const { getPopover, killPopover } = useModal();
  const authContext = useAuth();
  const { user } = authContext;
  const dispatch = useDispatch();
  const { getModal, killModal } = useModal();

  const [moveAnchorEl, setMoveAnchorEl] = useState(null);
  const [showFullText, setShowFullText] = useState(false);

  const openMovePopover = Boolean(moveAnchorEl);
  const id = useMemo(
    () => (openMovePopover ? "move-popover" : undefined),
    [openMovePopover]
  );

  const popStyles = useMemo(() => getPopoverItems[user.theme], [user.theme]);

  const handleEditTask = (task) => {
    dispatch(
      updateTask({
        _id: taskData._id,
        title: task.title,
        description: task.description,
        deadline: moment(task.deadline).toISOString(),
        priority: task.priority,
        column: taskData.column,
      })
    );
    killModal();
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask({ _id: taskData._id, column: colId }));
  };

  const taskDate = moment(taskData.deadline).format("DD/MM/YYYY");
  const isActual = moment().isBefore(moment(taskData.deadline), "day");
  const handleMoveTask = (moveTo) => {
    dispatch(
      updateTaskPlace({
        task: {
          ...taskData,
          column: moveTo,
        },
        oldColumn: taskData.column,
      })
    );
    killPopover();
  };

  const handleClick = () => {
    setShowFullText((prev) => !prev);
  };

  return (
    <>
      <Draggable draggableId={taskData._id} index={index}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <ul
              className={css.wrapper}
              style={{ borderLeft: `${proprityColors[taskData.priority].bl}` }}
            >
              <li>
                <h4 className={css.title}>
                  <EllipsisText
                    className={css.title}
                    text={taskData.title}
                    length={35}
                  />
                </h4>

                <div className={css.wrapper_text}>
                  {!showFullText && (
                    <EllipsisText
                      className={css.elips_text}
                      text={taskData.description}
                      tail=""
                      tailClassName={css.elips_text}
                      length={90}
                    />
                  )}

                  {!showFullText && taskData.description.length > 90 && (
                    <button className={css.showMore} onClick={handleClick}>
                      ...
                    </button>
                  )}
                  {showFullText && (
                    <span className={css.elips_text}>
                      {taskData.description}
                    </span>
                  )}
                </div>

                <div className={css.divider} />
                <div className={css.card}>
                  <div className={css.card_priority}>
                    <div className={css.card_title}>
                      <p className={css.priority}>Priority</p>
                      <div className={css.priorityBlock}>
                        <div
                          style={{
                            border: `${
                              proprityColors[taskData.priority].border
                            }`,
                            backgroundColor: `${
                              proprityColors[taskData.priority].bg
                            }`,
                          }}
                          className={css.circul}
                        ></div>
                        <p className={css.status}>
                          {levelsToIndexes[taskData.priority]}
                        </p>
                      </div>
                    </div>
                    <div className={css.card_dedline}>
                      <p className={css.priority}>Deadline</p>
                      <p className={css.day}>{taskDate}</p>
                    </div>
                  </div>
                  <div className={css.icon_list}>
                    {!isActual && taskData.priority !== "none" && (
                      <button type="button" className={css.icon_buttons_bell}>
                        <Icon
                          name={"#bell-icon"}
                          width="16"
                          height="16"
                          stroke="var( --accent-color)"
                        />
                      </button>
                    )}

                    <button
                      className={css.icon_buttons}
                      onClick={() =>
                        getPopover(
                          <MoveList col={colId} onSelect={handleMoveTask} />
                        )
                      }
                    >
                      <Icon
                        tip="Move"
                        name={"#arrow-circle-icon"}
                        width="16"
                        height="16"
                        stroke="var( --index-label-color)"
                      />
                    </button>

                    <button
                      type="button"
                      className={css.icon_buttons}
                      onClick={() =>
                        getModal(
                          "Edit card",
                          <CardForm
                            taskData={taskData}
                            setTask={handleEditTask}
                          />
                        )
                      }
                    >
                      <Icon
                        tip="Edit task"
                        name={"#pencil-icon"}
                        width="16"
                        height="16"
                        stroke="var( --index-label-color)"
                      />
                    </button>

                    <button
                      type="button"
                      className={css.icon_buttons}
                      onClick={handleDeleteTask}
                    >
                      <Icon
                        tip="Delete"
                        name={"#trash-icon"}
                        width="16"
                        height="16"
                        stroke="var( --index-label-color)"
                      />
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        )}
      </Draggable>
      {/*       {isEditTaskOpened && (
        <Modal
          name="Edit card"
          onClick={event => {
            if (event.currentTarget === event.target) {
              setEditTaskOpened(false);
            }
          }}
          onClose={toggleModal}
        >
          <CardForm taskData={taskData} setTask={handleEditTask} onClose={toggleModal} />
        </Modal>
      )} */}
    </>
  );
};

Task.propTypes = {
  taskData: PropTypes.object.isRequired,
};

export default Task;

import React, { useMemo, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import EllipsisText from 'react-ellipsis-text';
import Tooltip from '@mui/material/Tooltip';
import Popover from '@mui/material/Popover';
import styled from '@emotion/styled';
import moment from 'moment';

import Modal from 'components/Modal/Modal';
import css from './Task.module.css';
import { CardForm } from 'components/forms/CardForm/CardForm';
import Icon from 'components/Icon/Icon';
import { useModal } from 'hooks/useModal';
import {
  deleteTask,
  updateTask,
  updateTaskPlace,
} from 'redux/boards/operations';

const levelsToIndexes = {
  none: 'Without priority',
  low: 'Low',
  medium: 'Medium',
  high: 'High',
}
  const proprityColors = {
    none: {
      border: '1px solid #878787',
      bg: '#878787',
      bl: '4px solid #878787'
    },
    low: {
      border: '1px solid #8FA1D0',
      bg: '#8FA1D0',
      bl: '4px solid #8FA1D0',
    },
    medium: {
      border: '1px solid #E09CB5',
      bg: '#E09CB5',
      bl: '4px solid #E09CB5',
    },
    high: {
      border: '1px solid #BEDBB0',
      bg: '#BEDBB0',
      bl: '4px solid #BEDBB0',
    },
  };

const getPopoverItems = {
  dark: {
    hc: '#bedbb0',
    bg: '#1F1F1F',
    tc: 'rgba(255, 255, 255, 0.50)',
  },
  violet: {
    hc: '#5255bc',
    bg: '#FCFCFC',
    tc: '#161616',
  },
  light: {
    hc: '#bedbb0',
    bg: '#FCFCFC',
    tc: '#161616',
  }
};

const PopupWrapper = styled.div`
  background-color: ${({ popStyles }) => popStyles.bg};
`;

const ItemWrapper = styled.li`
  color: ${({ popStyles }) => popStyles.tc};
  &:hover{
    color: ${({ popStyles }) => popStyles.hc};
   }
`;  

const Task = ({
  avaliableColumns,
  taskData,
  colId
}) => {
  const { getPopover, killPopover } = useModal();
  const authContext = useAuth();
  const { user } = authContext;
  const dispatch = useDispatch();
  const { getModal, killModal } = useModal();

  const [isEditTaskOpened, setEditTaskOpened] = useState(false);
  const [moveAnchorEl, setMoveAnchorEl] = useState(null);

  const toggleModal = () => setEditTaskOpened(!isEditTaskOpened);

  const openMovePopover = Boolean(moveAnchorEl);
  const id = useMemo(() => (openMovePopover ? 'move-popover' : undefined)
  , [openMovePopover]);

  const popStyles  = useMemo(() => getPopoverItems[user.theme], [user.theme]);

  const handleEditTask = (task) => {
    dispatch(updateTask({
      _id: taskData._id,
      title: task.title,
      description: task.description, 
      deadline: moment(task.deadline).toISOString(), 
      priority: task.priority, 
      column: taskData.column,
    }));
    killModal();
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask({_id:taskData._id, column:colId}));
  }

  const taskDate = moment(taskData.deadline).format("DD/MM/YYYY");
  const isActual = moment().isBefore(moment(taskData.deadline), "day");

  return (
    <>
      <ul
        className={css.wrapper}
        style={{ borderLeft: `${proprityColors[taskData.priority].bl}` }}
      >
        <li key={taskData.id}>
          <h2 className={css.title}>{taskData.title}</h2>
          <div className={css.wrapper_text}>
            <EllipsisText
              className={css.elips_text}
              text={taskData.description}
              length={90}
            />
          </div>
          <div className={css.divider} />
          <div className={css.card}>
            <div className={css.card_priority}>
              <div className={css.card_title}>
                <p className={css.priority}>Priority</p>
                <div className={css.priorityBlock}>
                  <div style={{
                    border: `${proprityColors[taskData.priority].border}`,
                    backgroundColor: `${proprityColors[taskData.priority].bg}`,
                  }} className={css.circul}></div>
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
            {!isActual && taskData.priority !== 'none' && (
              <Tooltip title="din din">
                <button 
                  type='button'
                  className={css.icon_buttons_bell}
                >
                  <Icon
                    sprite={2}
                    name={'#bell-icon'}
                    width="16"
                    height="16"
                    stroke="var( --accent-color)"
                  />
                </button>
              </Tooltip>
            )}
              <Tooltip title="Move">
                <button
                  aria-describedby={id}
                  disabled={!Object.keys(avaliableColumns || {}).length}
                  type="button"
                  className={css.icon_buttons}

                  onClick={() => getPopover(<ul className={css.popover_list}>
                    {Object.entries(avaliableColumns)?.map(([id, title]) => (
                      <li className={css.popoverItem} key={id}>
                        <button
                          className={css.popoverBtn}
                          onClick={() => {
                            dispatch(updateTaskPlace({
                              task: {
                                ...taskData,
                                column: id,
                              },
                              oldColumn: taskData.column,
                            }));
                            killPopover();
                          }}
                        >
                        <p className={css.popoverStatus}>{title}</p>
                        </button>
                        <Icon
                          sprite={2}
                          name={'#arrow-circle-icon'}
                          width="16"
                          height="16"
                        />
                      </li>
                    ))}
                  </ul>)}

                  variant="contained"
                >
                  <Icon
                    sprite={2}
                    name={'#arrow-circle-icon'}
                    width="16"
                    height="16"
                    stroke="var( --index-label-color)"
                  />
                </button>
              </Tooltip>
              <Tooltip title="Edit">
                <button
                  type="button"
                  className={css.icon_buttons}
                  onClick={() =>  getModal(
                    "Edit card",
                    <CardForm taskData={taskData} setTask={handleEditTask} />
                  )}
                >
                  <Icon
                    sprite={2}
                    name={'#pencil-icon'}
                    width="16"
                    height="16"
                    stroke="var( --index-label-color)"
                  />
                </button>
              </Tooltip>
              <Tooltip title="Delete">
                <button
                  type="button"
                  className={css.icon_buttons}
                  onClick={handleDeleteTask}
                >
                  <Icon
                    sprite={2}
                    name={'#trash-icon'}
                    width="16"
                    height="16"
                    stroke="var( --index-label-color)"
                  />
                </button>
              </Tooltip>
            </div>
          </div>
        </li>
      </ul>
      {isEditTaskOpened && (
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
      )}
      <Popover
        id={id}
        open={openMovePopover}
        anchorEl={moveAnchorEl}
        onClose={() => setMoveAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        sx={{ 
          "& .MuiPopover-paper": {
            backgroundColor: 'inherit',
            borderRadius: '8px',
          }
        }}
      >
        <PopupWrapper popStyles={popStyles}>
          <ul className={css.popover_list}>
            {Object.entries(avaliableColumns)?.map(([id, title]) => (
              <ItemWrapper className={css.popoverItem} key={id} popStyles={popStyles}>
                <button
                  onClick={() => {
                    // setMoveAnchorEl(null);
                  }}
                  className={css.popoverBtn}
                >
                <p className={css.popoverStatus}>{title}</p>
                </button>
                <Icon 
                  sprite={2}
                  name={'#arrow-circle-icon'}
                  width="16"
                  height="16"
                />
              </ItemWrapper>
            ))}
          </ul>
        </PopupWrapper>
      </Popover>
    </>
  );
};

Task.propTypes = {
  taskData: PropTypes.object.isRequired,
};

export default Task;

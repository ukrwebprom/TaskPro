import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import EllipsisText from 'react-ellipsis-text';
import Tooltip from '@mui/material/Tooltip';
import Popover from '@mui/material/Popover';

import Modal from 'components/Modal/Modal';
import css from './Task.module.css';
import { CardForm } from 'components/forms/CardForm/CardForm';
import Icon from 'components/Icon/Icon';

const levelsToIndexes = {
  0: 'Without priority',
  1: 'Low',
  2: 'Medium',
  3: 'High',
};

const Task = ({ taskData, columnList }) => {
  const [isEditTaskOpened, setEditTaskOpened] = useState(false);
  const [moveAnchorEl, setMoveAnchorEl] = useState(null);

  const openMovePopover = Boolean(moveAnchorEl);
  const id = useMemo(
    () => (openMovePopover ? 'move-popover' : undefined),
    [openMovePopover]
  );

  return (
    <>
      {/* TODO ul must belong to column - remove after colume released!!! */}
      <ul className={css.wrapper}>
        <li>
          <h2 className={css.title}>{taskData.title}</h2>
          <div className={css.wrapper_text}>
            <EllipsisText
              className={css.elips_text}
              // style={{ fontSize: '12px', color: 'var( --index-label-color)' }}
              text={taskData.description}
              length={110}
            />
          </div>
          <div className={css.divider} />
          <div className={css.card}>
            <div className={css.card_priority}>
              <div className={css.card_title}>
                <p className={css.priority}>Priority</p>
                <p className={css.status}>
                  {levelsToIndexes[taskData.priority]}
                </p>
              </div>
              <div className={css.card_dedline}>
                <p className={css.priority}>Deadline</p>
                <p className={css.day}>23/06/2023</p>
              </div>
            </div>
            <div>
              <Tooltip title="Move">
                <button
                  aria-describedby={id}
                  disabled={!columnList.length}
                  type="button"
                  className={css.icon_buttons}
                  onClick={event => setMoveAnchorEl(event.currentTarget)}
                  variant="contained"
                >
                  <Icon
                    className={css.icon_info}
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
                  onClick={() => setEditTaskOpened(true)}
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
                <button type="button" className={css.icon_buttons}>
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
          name={taskData.id ? 'Edit card' : 'Add card'}
          onClick={event => {
            if (event.currentTarget === event.target) {
              setEditTaskOpened(false);
            }
          }}
          onClose={() => setEditTaskOpened(!isEditTaskOpened)}
        >
          <CardForm taskData={taskData} />
        </Modal>
      )}
      {/* TODO: it was good idea with mui Popover, but does not work completly */}
      <Popover
        classes={{
          paper: css.popover,
        }}
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
      >
        <ul>
          {columnList?.map(column => (
            <li className={css.popoverItem}>
              <p className={css.popoverStatus}>{column.name}</p>
              <Icon
                sprite={2}
                name={'#arrow-circle-icon'}
                width="16"
                height="16"
                fill={'#8942b3'}
                stroke={'#d400ff'}
              />
            </li>
          ))}
        </ul>
      </Popover>
    </>
  );
};

Task.propTypes = {
  taskData: PropTypes.object.isRequired,
};

export default Task;

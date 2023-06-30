import React, { useMemo, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import PropTypes from 'prop-types';
import EllipsisText from 'react-ellipsis-text';
import Tooltip from '@mui/material/Tooltip';
import Popover from '@mui/material/Popover';
import styled from '@emotion/styled';

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

const Task = ({ taskData, columnList }) => {
  const authContext = useAuth();
  const { user } = authContext;

  const [isEditTaskOpened, setEditTaskOpened] = useState(false);
  const [moveAnchorEl, setMoveAnchorEl] = useState(null);

  const openMovePopover = Boolean(moveAnchorEl);
  const id = useMemo(() => (openMovePopover ? 'move-popover' : undefined)
  , [openMovePopover]);

  const popStyles  = useMemo(() => getPopoverItems[user.theme], [user.theme]);

  return (
    <>
      <ul className={css.wrapper}>
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
                <p className={css.status}>
                  {levelsToIndexes[taskData.priority]}
                </p>
              </div>
              <div className={css.card_dedline}>
                <p className={css.priority}>Deadline</p>
                <p className={css.day}>23/06/2023</p>
              </div>
            </div>
            <div className={css.icon_list}>
            <Tooltip title="Attation">
            <Icon
                    className={css.icon_info}
                    sprite={2}
                    name={'#bell-icon'}
                    width="16"
                    height="16"
                    stroke="var( --index-label-color)"
                  />
            </Tooltip>
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
            {columnList?.map(column => (
              <ItemWrapper className={css.popoverItem} key={column.name} popStyles={popStyles}>
                <button
                  onClick={() => setMoveAnchorEl(null)}
                  className={css.popoverBtn}
                >
                <p className={css.popoverStatus}>{column.name}</p>
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

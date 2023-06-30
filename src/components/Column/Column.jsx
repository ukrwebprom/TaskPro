import { useMemo } from "react";
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ColumnForm } from 'components/forms/ColumnForm/ColumnForm';
import { CardForm } from 'components/forms/CardForm/CardForm';
import { updateColumnTitle, deleteColumn } from 'redux/boards/operations';
import Modal from '../Modal/Modal';
import Task from 'components/Task/Task';
import Icon from '../Icon';

import css from './Column.module.css';

export const Column = ({
  allColumns,
  data,
}) => {
  const dispatch = useDispatch();
  const [showColumnModal, setShowColumnModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);

  const toggleColumnModal = () => setShowColumnModal(c => !c);
  const handleEditColumn = value => dispatch(updateColumnTitle({...data, ...value}));
  const handleDelete = () => dispatch(deleteColumn(data._id));

  const toggleTaskModal = () => setShowTaskModal(c => !c);

  const avaliableColumns = useMemo(() => {
    const newColumns = {...allColumns};
    delete newColumns[data._id];
    return newColumns;
  }, [allColumns, data]);

/*   const makeTask = task => {
    if (listTask === null) {
      setListTask([task]);
    } else {
      setListTask(prevTasks => {
        return [...prevTasks, task];
      });
    }
  }; */
  return (
    <>
    <section className={css.containerColumn}>
      <div className={css.wrapperTitleColumn}>
        <h3 className={css.titleColumn}>{data.title}</h3>
        <div className={css.wrapperButton}>
          <button
            className={css.buttonColumn}
            type="button"
            onClick={toggleColumnModal}
          >
            <Icon name={'#pencil-icon'} />
          </button>
          <button className={css.buttonColumn} onClick={handleDelete}>
            <Icon name={'#trash-icon'} />
          </button>
        </div>
      </div>

      <div className={css.columnMiddle}>
      <ul className={css.listTask}>
        {data.tasks &&
          data.tasks.map((task, idx) => 
            (
              <Task
                avaliableColumns={avaliableColumns}
                index={idx}
                key={nanoid()}
                taskData={task}
                columnList={[{name: 'todo'}, {name: 'Done'}]}
              />
            )
          )}
      </ul>
      </div>

      <div className={css.columnBottom}>
      <button
        type="button"
        className={css.addCardButton}
        onClick={toggleTaskModal}
      >
        {' '}
        <div className={css.wrapperIcon}>
          <Icon name={'#plus-icon'} />
        </div>
        <span className={css.addCard}>Add another card</span>
      </button>
      </div>
    </section>

    {showColumnModal && ( 
      <Modal onClose={toggleColumnModal} name = "Edit column">
        <ColumnForm defaultValues={{title:data.title}} setTitle={handleEditColumn} onClose={toggleColumnModal} />
      </Modal>
    )}
    {showTaskModal && ( 
      <Modal onClose={toggleTaskModal} name = "Add card">
        <CardForm defaultValues={{title:data.title}} setTitle={handleEditColumn} onClose={toggleTaskModal} />
      </Modal>
    )}
    </>
  );
};


/* {showModalCreateTasks && (
  <Modal
    name="Add card"
    onClick={event => {
      if (event.currentTarget === event.target) {
        toggleModalCreateTasks();
      }
    }}
    onClose={toggleModalCreateTasks}
  >
    <CardForm taskData={makeTask} onClose={toggleModalCreateTasks} />
  </Modal>
)}
 */
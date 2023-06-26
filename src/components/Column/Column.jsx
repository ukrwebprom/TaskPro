import { nanoid } from 'nanoid';
import { useState } from 'react';
import { ColumnForm } from 'components/forms/ColumnForm/ColumnForm';
import { CardForm } from 'components/forms/CardForm/CardForm';
import Modal from '../Modal/Modal';
import Task from 'components/Task/Task';
import Icon from '../Icon';

import css from './Column.module.css';

export const Column = () => {
  const [title, setTitle] = useState('To Do');
  const [listTask, setListTask] = useState(null);
  const [showModalEditColumnName, setShowModalEditColumnName] = useState(false);
  const [showModalCreateTasks, setShowModalCreateTasks] = useState(false);

  const toggleModalEditColumnName = () => {
    setShowModalEditColumnName(!showModalEditColumnName);
  };

  const toggleModalCreateTasks = () => {
    setShowModalCreateTasks(!showModalCreateTasks);
  };
  const makeTask = task => {
    if (listTask === null) {
      setListTask([task]);
    } else {
      setListTask(prevTasks => {
        return [...prevTasks, task];
      });
    }
  };
  return (
    <section className={css.containerColumn}>
      <div className={css.wrapperTitleColumn}>
        <h3 className={css.titleColumn}>{title}</h3>
        <div className={css.wrapperButton}>
          <button
            className={css.buttonColumn}
            type="button"
            onClick={toggleModalEditColumnName}
          >
            <Icon name={'#pencil-icon'} />
          </button>
          <button className={css.buttonColumn}>
            <Icon name={'#trash-icon'} />
          </button>
        </div>
        {showModalEditColumnName && (
          <Modal onClose={toggleModalEditColumnName}>
            <ColumnForm
              setTitle={setTitle}
              onClose={toggleModalEditColumnName}
              title={title}
            />
          </Modal>
        )}
        {showModalCreateTasks && (
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
      </div>

      <ul className={css.listTask}>
        {listTask &&
          listTask.map(task => {
            return (
              <Task
                key={nanoid()}
                taskData={task}
                columnList={['todo', 'done']}
              />
            );
          })}
      </ul>

      <button
        type="button"
        className={css.addCardButton}
        onClick={toggleModalCreateTasks}
      >
        {' '}
        <div className={css.wrapperIcon}>
          <Icon name={'#plus-icon'} />
        </div>
        <span className={css.addCard}>Add another card</span>
      </button>
    </section>
  );
};
{
  /* <li key={task.title} className={css.task}>
                <p>{task.title}</p>
                <p>{task.description}</p>
                <p>{task.lableColor}</p>
                <p>{date.toLocaleDateString('en-GB')}</p>
              </li> */
}
{
  /* const date = new Date(task.deadline);
            const formattedDate = date.toLocaleDateString('en-GB');

            task.deadline = formattedDate.toString(); */
}

import { nanoid } from 'nanoid';
import { useState } from 'react';
/* import { ColumnForm } from 'components/forms/ColumnForm/ColumnForm';
import { CardForm } from 'components/forms/CardForm/CardForm';
import Modal from '../Modal/Modal'; */
import Task from 'components/Task/Task';
import Icon from '../Icon';

import css from './Column.module.css';

export const Column = ({data}) => {
  const faketasks = [
    {id:1, priority:0, title:"The Watch Spot Design", description: "Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design."},
    {id:2, priority:2, title:"Research and Analysis", description: "Conduct in-depth research and analysis on the project's topic, gather relevant data, and identify key insights to inform decision-making and project planning."},
    {id:3, priority:3, title:"Concept Development", description: "Brainstorm and develop creative concepts and ideas that align with the project's objectives, considering factors such as target audience, messaging, and visual representation."},
    {id:4, priority:1, title:"Design and Prototyping SoYummy", description: "Create visually appealing and functional design prototypes based on the approved concepts, ensuring seamless user experience and incorporating feedback for iterative improvements."}
  ]
  const [title] = useState(data.title);
  const [listTask] = useState(faketasks);
  const [showModalEditColumnName, setShowModalEditColumnName] = useState(false);
  const [showModalCreateTasks, setShowModalCreateTasks] = useState(false);

  const toggleModalEditColumnName = () => {
    setShowModalEditColumnName(!showModalEditColumnName);
  };

  const toggleModalCreateTasks = () => {
    setShowModalCreateTasks(!showModalCreateTasks);
  };
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
      </div>

      <div className={css.columnMiddle}>
      <ul className={css.listTask}>
        {listTask &&
          listTask.map(task => 
            (
              <Task
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
        onClick={toggleModalCreateTasks}
      >
        {' '}
        <div className={css.wrapperIcon}>
          <Icon name={'#plus-icon'} />
        </div>
        <span className={css.addCard}>Add another card</span>
      </button>
      </div>
    </section>
  );
};

/* {showModalEditColumnName && (
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
)} */

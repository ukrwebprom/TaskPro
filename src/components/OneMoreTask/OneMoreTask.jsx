import css from './OneMoreTask.module.css';
import { Draggable } from 'react-beautiful-dnd';
export const OneMoreTask = ({data, index}) => {
    return(
        <Draggable draggableId={data._id} index={index}>
        {(provided) => {return (
        <div className={css.task}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          >
                <p>{index}</p>
        </div>)}}
      </Draggable>
    )
}
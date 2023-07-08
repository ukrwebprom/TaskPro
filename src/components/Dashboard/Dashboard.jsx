import { useDispatch } from 'react-redux';
import { DragDropContext } from "react-beautiful-dnd";
import { StrictModeDroppable } from "utils/StrictModeDroppable";
import { addColumn } from 'redux/boards/operations';
import Button from "components/Button/Button";
import { useBoards } from 'hooks/useBoards'
import css from "./Dashboard.module.css";
import { Column } from "components/Column/Column";
import { Background } from "components/Background/Background";
import { ColumnForm } from 'components/forms/ColumnForm/ColumnForm';
import { useModal } from "hooks/useModal";
import Filters from "components/Filters/Filters";
import { dragAndDropTask, dragAndDropColumn } from "redux/boards/slice";
import axios from "axios";

const DashBoard = () => {
  const {getModal, killModal} = useModal();
  const dispatch = useDispatch();
  const {current, currentData} = useBoards();

const updateTaskOrder = async (task) => {
      const { _id, column, newOrder } = task;
      try {
        await axios.patch(`/tasks/${_id}`, {
          column,
          newOrder
        });
      } catch (error) {
        console.log(error.message)
      }
  };

  const updateColumnOrder = async (column) => {
    const { _id, newOrder } = column;
    try {
      await axios.patch(`/columns/${_id}/order`, {
        newOrder
      });
    } catch (error) {
      console.log(error.message)
    }
};

  const handleAddColumn = value => {
    dispatch(addColumn({board: currentData._id,...value}));
    killModal();
  }

  const onDragEnd = res => {
    const {destination, source, draggableId} = res;
    if(!destination) return;

    switch(res.type) {
      case 'task':
        const task = {
          _id:draggableId, 
          column:destination.droppableId, 
          newOrder:destination.index
        }
        dispatch(dragAndDropTask({destination,source,draggableId}));
        updateTaskOrder(task);
        break;
      case 'column':
        const column = {
          _id:draggableId, 
          newOrder:destination.index
        }
        updateColumnOrder(column)
        dispatch(dragAndDropColumn({destination,source,draggableId}));
        break;
      default:
        return
    }
    
    
  }
  
  return (
        <>
        {current !== null && (
        <Background>
          <DragDropContext onDragEnd={onDragEnd}>
            
        <div className={css.dashboardContainer}>
            <div className={css.dashboardHeader}>
              <h2 className={css.dashboardTitle}>{currentData?.title}</h2>
              <Filters />
            </div>

          <div className={css.listArea}>
          {currentData?.columns.length > 0 &&
          <StrictModeDroppable droppableId={currentData._id} direction="horizontal" type="column">
            {(provided) => (       
            <div className={css.columnsList} {...provided.droppableProps} ref={provided.innerRef}>
            {
            (currentData.columns.map((column, i) => 
              (
                  <Column
                    data={column}
                    index={i}
                    key={column._id}
                  />
                )
                ))
              }
              {provided.placeholder}
            </div>
              )}
              </StrictModeDroppable> 
              }
              <div className={css.column}>
              <Button invert={true} title="Add another column" type="button" 
              action={() => getModal("Add another column", <ColumnForm setTitle={handleAddColumn} />)}/>
              </div>             
          </div>

        </div>
        </DragDropContext>
        </Background>
        )}
        </>
      );
};

export default DashBoard;

import React, { useMemo } from "react";
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
import { dragAndDrop } from "redux/boards/slice";
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

  const handleAddColumn = value => {
    dispatch(addColumn({board: currentData._id,...value}));
    killModal();
  }

  const columnNamesToIds = useMemo(() => currentData?.columns
    ?.reduce((acc, column) => {
        acc[column._id] = column.title;
        return acc;
    }, {})
    , [currentData]);

  const onDragEnd = res => {
    const {destination, source, draggableId} = res;
    if(!destination) return;

      const task = {
        _id:draggableId, 
        column:destination.droppableId, 
        newOrder:destination.index
      }
    dispatch(dragAndDrop({destination,source,draggableId}));
    updateTaskOrder(task);
  }
  
  return (
        <>
        {current !== null && (
        <Background>
          <DragDropContext onDragEnd={onDragEnd}>
            
        <div className={css.dashboardContainer}>
            <div className={css.dashboardHeader}>
              <h2 className={css.dashboardTitle}>{currentData.title}</h2>
              <Filters />
            </div>
            <StrictModeDroppable droppableId={currentData._id} direction="horizontal" type="column">
            {(provided) => ( 
          <div className={css.listArea} {...provided.droppableProps} ref={provided.innerRef}>
        
            <div className={css.columnsList}>
            {currentData.columns.length > 0 &&
            (currentData.columns.map((column, i) => 
              (
/*                 <li key={column._id} className={css.column}> */
                  <Column
/*                     allColumns={columnNamesToIds} */
                    data={column}
                    index={i}
                    key={column._id}
                  />
                /* </li> */
                )
                ))
              }
{/*               <li className={css.column}>
              <Button invert={true} title="Add another column" type="button" 
              action={() => getModal("Add another column", <ColumnForm setTitle={handleAddColumn} />)}/>
              </li> */}
              {provided.placeholder}
            </div>
            
          </div>
             )}
             </StrictModeDroppable>   
        </div>
        </DragDropContext>
        </Background>
        )}
        </>
      );
};

export default DashBoard;

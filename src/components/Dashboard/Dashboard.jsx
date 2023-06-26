import React from "react";
import { Column } from "components/Dashboard/Columns/Column";
import { useUser } from "hooks/useUser";
import css from './Dashboard.module.css'


    const columns = [{title: "todo", id: 1}, {title: "inProgress", id: 2}, {title: "done", id: 3}];

    const cards = [{
        title: "",
        description: "",
        labelColor: "red",
        deadline: new Date(),
        columnId: 1,
      }, 
      {
        title: "",
        description: "",
        labelColor: "blue",
        deadline: new Date(),
        columnId: 1,
      },
      {
        title: "",
        description: "",
        labelColor: "red",
        deadline: new Date(),
        columnId: 1,
      }]

const DashBoard = () => {
    const { currentBoard } = useUser();
    const dashboard = {
      title: "currentBoard.title", 
      icon:"currentBoard.icon", 
      background: "currentBoard.background", 
      id: "currentBoard._id"};
    return (
        <div className={css.dashboardContainer}>
           
           <div className={css.dashboardHeader}>
            <span>{dashboard.title} </span> 
            
         </div>

            <div className={css.columnsList}>
               {columns.map((column) => (
               <Column 
               
                title={column.title}
                cards={cards.filter((card)=>(card.columnId === column.id))}
                   />
                ))}
                </div>
        </div>
         
        
    );
};

export default DashBoard;
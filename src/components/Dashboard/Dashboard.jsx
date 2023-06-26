import React from "react";
import { Column } from "components/Dashboard/Columns/Column";
import css from './Dashboard.module.css'

const dashboard = {title: "Dashboard2", 
    icon:"", 
    background: "", 
    id: "64975dc80a8a56550bcd4729"};

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

export const DashBoard = () => {
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
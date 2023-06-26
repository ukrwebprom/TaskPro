import React from "react";
import { Column } from "components/Dashboard/Columns/Column";
import { useUser } from "hooks/useUser";
import  Filters  from "components/Filters/Filters";
import Button from "components/Button";
import css from './Dashboard.module.css'
import {useState, useEffect } from "react";
import { getBoard } from "api/ServerAPI";


    

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

    const [columns, setColunms] = useState([]);
    
    useEffect(() => {
/*       console.log(currentBoard); */
      if(!currentBoard){
        return
      }
      getBoard(currentBoard._id)
      .then((result) => {
/*         console.log(result) */
        setColunms(result.columns);
      })
      
    
      
    }, [currentBoard])

    if (!currentBoard) {
      return null;
    }

    
    

   
    return (
        <div className={css.dashboardContainer}>
           
           <div className={css.dashboardHeader}>
            <span>{currentBoard.title} </span> 
            <Button/>
            <Filters />
         </div>

            <div className={css.columnsList}>
               {columns.map((column) => (
               <Column 
               key={column._id}
                title={column.title}
                cards={cards.filter((card)=>(card.columnId === column.id))}
                   />
                ))}
                </div>
        </div>
         
        
    );
};

export default DashBoard;
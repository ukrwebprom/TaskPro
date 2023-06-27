import React from "react";
import Button from "components/Button/Button";
import btn from '../Button/Button.module.css';
import { useUser } from "hooks/useUser";
import  Filters  from "components/Filters/Filters";
/* import Button from "components/Button"; */
import css from './Dashboard.module.css'
import {useState, useEffect } from "react";
import { getBoard } from "api/ServerAPI";
import { Column } from "components/Column/Column";


const DashBoard = () => {

    const { currentBoard } = useUser();

    const [columns, setColunms] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
      const getBoardInfo = async (id) => {
        try {
          const res = await getBoard(id);
          console.log(res)
          setColunms(res);
        } catch (err) {
          console.log(err)
        }
      }
      if(currentBoard) {
        getBoardInfo(currentBoard._id);
        setTitle(currentBoard.title)
      }
    }, [currentBoard])
   
    return (
        <div className={css.dashboardContainer}>
          <div className={css.dashboardHeader}>
            <h2 className={css.dashboardTitle}>{title}</h2> 

            <Filters />
          </div>
          <div className={css.listArea}>
              <ul className={css.columnsList}>
               {columns.length > 0 && columns.map((column) => {
                return (
                <li key={column._id}>
                  <Column data={column} />
                </li>)
                }
                )}
                <li>
                <Button className={`${btn.btn} ${btn.column}`}><div className={`${btn.plus} ${btn.plusColumn}`}>+</div>Add another column</Button>
                </li>
              </ul>
          </div>
        </div>
         
        
    );
};

export default DashBoard;
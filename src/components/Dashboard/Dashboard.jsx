import React, { useMemo } from "react";
import { useDispatch } from 'react-redux';
import { addColumn } from 'redux/boards/operations';
import Button from "components/Button/Button";
import btn from "../Button/Button.module.css";
import { useBoards } from 'hooks/useBoards'
/* import Button from "components/Button"; */
import css from "./Dashboard.module.css";
import { useState } from "react";
import { Column } from "components/Column/Column";
/* import FiltersButton from "components/Filters/FiltersButton";
import FiltersModal from "components/Filters/FiltersModal"; */
import { Background } from "components/Background/Background";
import Modal from "components/Modal/Modal";
import { ColumnForm } from 'components/forms/ColumnForm/ColumnForm';
import { useModal } from "hooks/useModal";
import Filters from "components/Filters/Filters";

const DashBoard = () => {
  const {getModal, killModal} = useModal();
  const dispatch = useDispatch();
  const {current, currentData} = useBoards();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(c => !c)
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


  return (
        <>
        {current !== null && (
        <Background>
        <div className={css.dashboardContainer}>
            <div className={css.dashboardHeader}>
              <h2 className={css.dashboardTitle}>{currentData.title}</h2>
              <Filters />
            </div>

          <div className={css.listArea}>
            <ul className={css.columnsList}>
            {currentData.columns.length > 0 &&
            (currentData.columns.map((column) => {
              return (
                <li key={column._id} className={css.column}>
                  <Column
                    allColumns={columnNamesToIds}
                    data={column}
                  />
                </li>);}
                ))
              }
              <li className={css.column}>
              <Button invert={true} title="Add another column" type="button" 
              action={() => getModal("Add another column", <ColumnForm setTitle={handleAddColumn} />)}/>
              </li>
            </ul>
          </div>
        </div>
        </Background>
        )}
        </>
      );
};

export default DashBoard;

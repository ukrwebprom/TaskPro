import React from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from 'redux/boards/operations';
import Button from 'components/Button/Button';
import btn from '../Button/Button.module.css';
import { useBoards } from 'hooks/useBoards';
import Icon from '../Icon';
/* import Button from "components/Button"; */
import css from './Dashboard.module.css';
import { useState, useEffect } from 'react';
import { Column } from 'components/Column/Column';
import FiltersButton from 'components/Filters/FiltersButton';
import FiltersModal from 'components/Filters/FiltersModal';
import { Background } from 'components/Background/Background';
import Modal from 'components/Modal/Modal';
import { ColumnForm } from 'components/forms/ColumnForm/ColumnForm';

const DashBoard = () => {
  const dispatch = useDispatch();
  const { current, currentData } = useBoards();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(c => !c);
  const handleAddColumn = value => {
    dispatch(addColumn({ board: currentData._id, ...value }));
  };

  /*  
  const setBoardBg = async (newBgIndex) => {
    try {
      await updBg(boards[current]._id, { background: newBgIndex });
    } catch (err) {
      console.log(err);
    }
  };
  const handleBgClick = (index) => {
    if (index === 0) {
      setSelectedBgIndex(null);
      setBoardBg(null);
    } else {
      setSelectedBgIndex(index.toString());
      setBoardBg(index.toString());
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []); */

  return (
    <>
      {current !== null && (
        <Background>
          <div className={css.dashboardContainer}>
            <div className={css.dashboardHeader}>
              <h2 className={css.dashboardTitle}>{currentData.title}</h2>

              {/*         <FiltersButton onClick={openModal} /> */}
              {/*         {isModalOpen && (
          <FiltersModal
            isOpen={isModalOpen}
            onClose={closeModal}
            handleBgClick={handleBgClick}
            selectedBgIndex={selectedBgIndex}
          />
        )} */}
            </div>
            <div className={css.listArea}>
              <ul className={css.columnsList}>
                {currentData.columns.length > 0 &&
                  currentData.columns.map(column => {
                    return (
                      <li key={column._id}>
                        <Column data={column} columns={currentData.columns} />
                      </li>
                    );
                  })}
                <li>
                  <Button
                    className={`${btn.btn} ${btn.column}`}
                    onClick={toggleModal}
                  >
                    <div className={css.wrapperIcon}>
                      <Icon name={'#plus-icon'} />
                    </div>
                    <span className={css.addColumnSpan}>
                      Add another column
                    </span>
                    {/* <div className={`${btn.plus} ${btn.plusColumn}`}>+</div>Add
                    another column */}
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </Background>
      )}
      {isModalOpen && (
        <Modal onClose={toggleModal} name="Add column">
          <ColumnForm setTitle={handleAddColumn} onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default DashBoard;

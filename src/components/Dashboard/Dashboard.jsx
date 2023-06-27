import React from "react";
import Button from "components/Button/Button";
import btn from "../Button/Button.module.css";
import { useUser } from "hooks/useUser";
/* import Button from "components/Button"; */
import css from "./Dashboard.module.css";
import { useState, useEffect } from "react";
import { getBoard, updBg } from "api/ServerAPI";
import { Column } from "components/Column/Column";
import FiltersButton from "components/Filters/FiltersButton";
import FiltersModal from "components/Filters/FiltersModal";

const DashBoard = () => {
  const { currentBoard } = useUser();

  const [columns, setColunms] = useState([]);
  const [title, setTitle] = useState("");
  const [selectedBg, setSelectedBg] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const setBoardBg = async (newBg) => {
    try {
      await updBg(currentBoard._id, { background: newBg });
    } catch (err) {
      console.log(err);
    }
  };
  const handleBgClick = (background, index) => {
    if (index === 0) {
      setSelectedBg(null);
      setBoardBg(null);
    } else {
      setSelectedBg(background);
      setBoardBg(background);
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
  }, []);

  useEffect(() => {
    const getBoardInfo = async (id) => {
      try {
        const res = await getBoard(id);
        setColunms(res);
      } catch (err) {
        console.log(err);
      }
    };
    if (currentBoard) {
      getBoardInfo(currentBoard._id);
      setTitle(currentBoard.title);
      setSelectedBg(currentBoard.background);
    }
  }, [currentBoard]);

  return (
    <div
      className={css.dashboardContainer}
      style={{
        backgroundImage: selectedBg ? `url(${selectedBg})` : "none",
      }}
    >
      <div className={css.dashboardHeader}>
        <h2 className={css.dashboardTitle}>{title}</h2>
        <FiltersButton onClick={openModal} />
        {isModalOpen && (
          <FiltersModal
            isOpen={isModalOpen}
            onClose={closeModal}
            handleBgClick={handleBgClick}
            selectedBg={selectedBg}
          />
        )}
      </div>
      <div className={css.listArea}>
        <ul className={css.columnsList}>
          {columns.length > 0 &&
            columns.map((column) => {
              return (
                <li key={column._id} className={css.col}>
                  <Column data={column} />
                </li>
              );
            })}
          <li>
            <Button className={`${btn.btn} ${btn.column}`}>
              <div className={`${btn.plus} ${btn.plusColumn}`}>+</div>Add
              another column
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;

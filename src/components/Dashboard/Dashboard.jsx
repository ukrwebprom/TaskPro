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
  const [selectedBgIndex, setSelectedBgIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userScreen, setUserScreen] = useState("1280");
  const [userRatio, setUserRatio] = useState("1280");

  const windowMedia = () => {
    if (window.screen.width >= 1280) {
      return "1280";
    }
    if (window.screen.width >= 768 && window.screen.width < 1280) {
      return "768-min";
    } else {
      return "320-min";
    }
  };

  const windowPixelRatio = () => {
    if (window.devicePixelRatio >= 2) {
      return "2x";
    } else {
      return "1x";
    }
  };

  useEffect(() => {
    const screen = windowMedia();
    setUserScreen(screen);
  }, []);

  useEffect(() => {
    const ratio = windowPixelRatio();
    setUserRatio(ratio);
  }, []);

  const url = `https://res.cloudinary.com/pro-task-cloud/image/upload/v1687806931/backgrounds/diego-ph-wyeapf7Gy-U-unsplash%20${selectedBgIndex}%40${userRatio}_${userScreen}.jpg.webp`;

  const setBoardBg = async (newBgIndex) => {
    try {
      await updBg(currentBoard._id, { background: newBgIndex });
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
      setSelectedBgIndex(currentBoard.background);
    }
  }, [currentBoard]);

  return (
    <div
      className={css.dashboardContainer}
      media={window.media}
      style={{
        height: "100%",
        backgroundSize: "cover",
        backgroundImage: selectedBgIndex !== null ? `url(${url})` : "none",
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
            selectedBgIndex={selectedBgIndex}
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

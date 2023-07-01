import React from "react";
import css from "./Filters.module.css";
import { useState, useEffect } from "react";
import { updBg } from "api/ServerAPI";
import FiltersButton from "components/Filters/FiltersButton";
import FiltersModal from "components/Filters/FiltersModal";
import { selectCurrentBoardData } from "redux/boards/selectors";

const Filters = () => {
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
      await updBg(selectCurrentBoardData._id, { background: newBgIndex });
    } catch (err) {
      console.log(err);
    }
  };
  const handleBgClick = (index) => {
    if (index === 0) {
      setSelectedBgIndex("null");
      setBoardBg("null");
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

  // useEffect(() => {
  //   if (currentBoard) {
  //     setSelectedBgIndex(currentBoard.background);
  //   }
  // }, [currentBoard]);

  return (
    <div
      className={css.dashboardContainer}
      media={window.media}
      style={{
        backgroundSize: "cover",
        backgroundImage: selectedBgIndex !== null ? `url(${url})` : "none",
      }}
    >
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
  );
};

export default Filters;

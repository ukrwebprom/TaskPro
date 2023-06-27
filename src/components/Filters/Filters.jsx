import React, { useState, useEffect } from "react";
import FiltersButton from "./FiltersButton";
import FiltersModal from "./FiltersModal";
import css from "../Filters/Filters.module.css";
import { updBg } from "api/ServerAPI";

const Filters = ({ currentBoard }) => {
  const [selectedBg, setSelectedBg] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(currentBoard);
  const setBoardBg = async (newBg) => {
    try {
      const updatedBoard = await updBg(currentBoard._id, { background: newBg });
      setSelectedBg(updatedBoard.background);
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

  return (
    <div
      className={css.filtersContainer}
      style={{ backgroundImage: `url(${selectedBg})` }}
    >
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
  );
};

export default Filters;

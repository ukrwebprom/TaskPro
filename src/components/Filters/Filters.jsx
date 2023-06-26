import React, { useState, useEffect } from "react";
import FiltersButton from "./FiltersButton";
import FiltersModal from "./FiltersModal";
import css from "../Filters/Filters.module.css";
import { updateBackground } from "../../api/ServerAPI";

const Filters = () => {
  const [selectedBg, setSelectedBg] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBgClick = (background, index) => {
    if (index === 0) {
      setSelectedBg(null);
    } else {
      setSelectedBg(background);
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
          updateBackground={updateBackground}
        />
      )}
    </div>
  );
};

export default Filters;

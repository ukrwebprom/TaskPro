import React from "react";
import css from "./Filters.module.css";
import LabelColor from "./LabelColor";
import Background from "./Background";

const FiltersModal = ({ isOpen, onClose, handleBgClick, selectedBg }) => {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className={css.modalContent}>
        <div>
          <h2 className={css.modalTitle}>Filters</h2>
          <button className={css.closeButton} onClick={onClose}>
            Close
          </button>
        </div>
        <div className="modalBody">
          <Background handleBgClick={handleBgClick} selectedBg={selectedBg} />

          <LabelColor />
        </div>
      </div>
    </div>
  );
};

export default FiltersModal;

import React from "react";
import css from "./Filters.module.css";
import LabelColor from "./LabelColor";
import Background from "./Background";

const FiltersModal = ({ isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className={css.modalContent}>
        <div className={css.modalTitle}>
          <h2>Filters</h2>
          <button className={css.closeButton} onClick={onClose}>
            Close
          </button>
        </div>
        <div className="modalBody">
          <Background />

          <LabelColor />
        </div>
      </div>
    </div>
  );
};

export default FiltersModal;

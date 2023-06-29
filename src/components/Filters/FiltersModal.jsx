import React from "react";
import css from "./Filters.module.css";
import LabelColor from "./LabelColor";
import Background from "./Background";
import Icon from "components/Icon/Icon";

const FiltersModal = ({ isOpen, onClose, handleBgClick, selectedBgIndex }) => {
  return (
    <div className={css.modalContent}>
      <h2 className={css.modalTitle}>Filters</h2>
      <button className={css.closeButton} onClick={onClose}>
        <Icon name={"#close-icon"} sprite={2} width="18" height="18" />
      </button>
      <div className="modalBody">
        <Background
          handleBgClick={handleBgClick}
          selectedBgIndex={selectedBgIndex}
        />

        <LabelColor />
      </div>
    </div>
  );
};

export default FiltersModal;

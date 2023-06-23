import React from "react";
import css from "./Filters.module.css";

const FiltersButton = ({ onClick }) => {
  return (
    <button className={css.filtersButton} onClick={onClick}>
      Filters
    </button>
  );
};

export default FiltersButton;

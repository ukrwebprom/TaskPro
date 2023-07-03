import React from "react";
import css from "./Filters.module.css";
import Icon from "components/Icon/Icon";

const FiltersButton = ({ onClick }) => {
  return (
    <button className={css.filtersButton} onClick={onClick}>
      <Icon
        className={css.filterIcon}
        name={"#filter-icon"}
        width="16"
        height="16"
      />
      Filters
    </button>
  );
};

export default FiltersButton;

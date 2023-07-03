import React, { useEffect, useState } from "react";
import css from "./Filters.module.css";
import { useBoards } from "hooks/useBoards";
import { setFilter } from "redux/boards/slice";
import { useDispatch } from "react-redux";

const LabelColor = () => {
  const dispatch = useDispatch();
  const {filter} = useBoards();
  const [selectedPriority, setSelectedPriority] = useState(filter);
  
  useEffect(() => {
    dispatch(setFilter(selectedPriority));
  }, [selectedPriority, dispatch]);

  const handlePriorityChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedPriority(selectedValue);

    if (selectedValue === "withoutPriority") {
      setSelectedPriority("none");
    }
  };

  const getLabelClassName = (priority) => {
    return selectedPriority === priority ? css.selectedLabel : css.labelItem;
  };
  useEffect(() => {
    dispatch(setFilter(selectedPriority));
  }, [selectedPriority, dispatch]);
  return (
    <div className={css.labelContainer}>
      <div className={css.modalLine}></div>
      <div className={css.labelWrapper}>
        <h3 className={css.labelTitle}>Label color</h3>
        <button
          className={css.labelButton}
          onClick={() => setSelectedPriority(null)}
        >
          Show all
        </button>
      </div>
      <ul className={css.labelList}>
        <li>
          <label className={getLabelClassName("Without Priority")}>
            <input
              className={css.withoutPriorityInput}
              type="radio"
              value="none"
              checked={selectedPriority === "none"}
              onChange={handlePriorityChange}
            />
            <p>Without priority</p>
          </label>
        </li>
        <li>
          <label className={getLabelClassName("Low")}>
            <input
              className={css.lowInput}
              type="radio"
              value="low"
              checked={selectedPriority === "low"}
              onChange={handlePriorityChange}
            />
            Low
          </label>
        </li>
        <li>
          <label className={getLabelClassName("Medium")}>
            <input
              className={css.mediumInput}
              type="radio"
              value="medium"
              checked={selectedPriority === "medium"}
              onChange={handlePriorityChange}
            />
            Medium
          </label>
        </li>
        <li>
          <label className={getLabelClassName("High")}>
            <input
              className={css.highInput}
              type="radio"
              value="high"
              checked={selectedPriority === "high"}
              onChange={handlePriorityChange}
            />
            High
          </label>
        </li>
      </ul>
    </div>
  );
};

export default LabelColor;

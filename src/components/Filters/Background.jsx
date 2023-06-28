import React from "react";
import css from "./Filters.module.css";
import previews from "../../images/background/small-url.json";

const Background = ({ handleBgClick, selectedBgIndex }) => {
  return (
    <div className={css.bgContainer}>
      <div className={css.modalLine}></div>
      <h3 className={css.bgTitle}>Background</h3>
      <div>
        <ul className={css.bgList}>
          {previews.map((preview, index) => (
            <li key={index} className={css.bgItem}>
              <img
                className={`${css.bgImg} ${
                  selectedBgIndex === preview ? css.selectedBg : ""
                }`}
                src={preview}
                alt={`Background ${index + 1}`}
                onClick={() => handleBgClick(index)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Background;

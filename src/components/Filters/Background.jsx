import { useBoards } from "hooks/useBoards";
import { useDispatch } from "react-redux";
import { updateBoardBgById } from "redux/boards/operations";
import css from "./Filters.module.css";
import previews from "../../images/background/small-url.json";

const Background = () => {
  const {currentData} = useBoards();
  const dispatch = useDispatch();
  const handleBgClick = index => dispatch(updateBoardBgById({_id:currentData._id, background:index.toString()}));
  return (
    <div className={css.bgContainer}>
      <div className={css.modalLine}></div>
      <h3 className={css.bgTitle}>Background</h3>
      <div>
        <ul className={css.bgList}>
          {previews.map((preview, index) => (
            <li key={index} className={css.bgItem}>
              <img className={Number(currentData.background) === index ? css.selectedBg : css.bgImg}
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

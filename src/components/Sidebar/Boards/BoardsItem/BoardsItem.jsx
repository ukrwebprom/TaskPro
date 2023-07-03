import Tooltip from '@mui/material/Tooltip';
import Icon from "components/Icon/Icon";
import css from "../../Sidebar.module.css";

const BoardsItem = ({ index, board, setActive, handleDelete, handleEdit }) => {
  return (
    <>
      <div
        className={css.boardLink}
        onClick={() => setActive(index)}>
        <div className={css.boardInfo}>
          <Icon name={"#" + board.icon} width="18" height="18" />
          <span className={css.boardTitle}>{board.title}</span>
        </div>
        <div className={css.boardButtons}>
        <Tooltip title="Edit">
          <button type="button" className={css.boardActionButton}
          onClick={handleEdit}>
            <Icon name="#pencil-icon" />
          </button>
          </Tooltip>
          <Tooltip title="Delete">
          <button
            type="button"
            className={css.boardActionButton}
            onClick={() => handleDelete(board._id)}>
            <Icon name="#trash-icon" />
          </button>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default BoardsItem;

import Icon from "components/Icon/Icon";
import css from "../../../Sidebar.module.css";

const ProjectsItem = ({ index, board, setActive, handleDelete }) => {
  return (
    <>
      <a
        className={css.boardLink}
        onClick={() => setActive(index)}
        title={board.title}>
        <div className={css.boardInfo}>
          <Icon name={"#" + board.icon} width="18" height="18" />
          <span className={css.boardTitle}>{board.title}</span>
        </div>
        <div className={css.boardButtons}>
          <button type="button" className={css.boardActionButton}>
            <Icon name="#pencil-icon" />
          </button>
          <button
            type="button"
            className={css.boardActionButton}
            onClick={() => handleDelete(board._id)}>
            <Icon name="#trash-icon" />
          </button>
        </div>
      </a>
    </>
  );
};

export default ProjectsItem;

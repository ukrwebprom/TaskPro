import Icon from "components/Icon/Icon";
import css from "../../../Sidebar.module.css";

const ProjectsItem = ({ index, board, setActive }) => {
  return (
    <>
      <button
        type="button"
        className={css.projectsButton}
        onClick={() => setActive(index)}>
        <div className={css.boardTitle}>
          <Icon name={"#" + board.icon} />
          {board.title}
        </div>
        <div className={css.boardButtons}>
          <button type="button" className={css.boardActionButton}>
            <Icon name="#pencil-icon" />
          </button>
          <button type="button" className={css.boardActionButton}>
            <Icon name="#trash-icon" />
          </button>
        </div>
      </button>
    </>
  );
};

export default ProjectsItem;

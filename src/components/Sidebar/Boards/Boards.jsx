import ProjectsList from "./ProjectsList";
import "../Sidebar.css";

const Boards = () => {
  return (
    <div className="boards">
      <p>My boards</p>
      <button type="button" className="create-button button">
        <span className="create-text">Create a new board</span>
        <div className="create-icon">
          <svg width="20" height="20">
            <use href="" />
          </svg>
        </div>
      </button>
      <ProjectsList />
    </div>
  );
};

export default Boards;
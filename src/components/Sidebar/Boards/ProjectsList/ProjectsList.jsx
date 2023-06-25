import ProjectsItem from "./ProjectsItem";
import "../../Sidebar.css";
import css from "../../Sidebar.module.css";

const ProjectsList = ({ boards, setActive, activeBoard }) => {
  return (
    <ul className="projects">
      {boards.map((board, index) => (
        <li
          className={
            index === activeBoard ? css.projectsActive : css.projectsItem
          }
          key={board.id}>
          <ProjectsItem index={index} board={board} setActive={setActive} />
        </li>
      ))}
      {/*       <li className="projects-item active">
        <svg className="projects-icon">
          <use href="" />
        </svg>
        Some project
      </li>
      <li className="projects-item">
        <svg className="projects-icon">
          <use href="" />
        </svg>
        Some project
      </li>
      <li className="projects-item">
        <svg className="projects-icon">
          <use href="" />
        </svg>
        Some project
      </li>
      <li className="projects-item">
        <svg className="projects-icon">
          <use href="" />
        </svg>
        Some project
      </li>
      <li className="projects-item">
        <svg className="projects-icon">
          <use href="" />
        </svg>
        Some project
      </li>
      <li className="projects-item">
        <svg className="projects-icon">
          <use href="" />
        </svg>
        Some project
      </li>
      <li className="projects-item">
        <svg className="projects-icon">
          <use href="" />
        </svg>
        Some project
      </li>
      <li className="projects-item">
        <svg className="projects-icon">
          <use href="" />
        </svg>
        Some project
      </li>
      <li className="projects-item">
        <svg className="projects-icon">
          <use href="" />
        </svg>
        Some project
      </li>
      <li className="projects-item">
        <svg className="projects-icon">
          <use href="" />
        </svg>
        Some project
      </li> */}
    </ul>
  );
};

export default ProjectsList;

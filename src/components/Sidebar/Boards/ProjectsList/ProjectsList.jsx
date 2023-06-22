import ProjectsItem from "./ProjectsItem";
import "../../Sidebar.css";

const ProjectsList = () => {
  return (
    <ul className="projects">
      <ProjectsItem />
      <li className="projects-item active">
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
    </ul>
  );
};

export default ProjectsList;

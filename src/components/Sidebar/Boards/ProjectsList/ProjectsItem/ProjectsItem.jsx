import css from "../../../Sidebar.module.css";

const ProjectsItem = ({ index, name, setActive }) => {
  return (
    <>
      <button className={css.projectsButton} onClick={() => setActive(index)}>
        {name}
      </button>
    </>
  );
};

export default ProjectsItem;

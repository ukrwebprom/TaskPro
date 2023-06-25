import ProjectsItem from "./ProjectsItem";
import "../../Sidebar.css";
import css from "../../Sidebar.module.css";
import { getBoards, deleteBoard } from "api/ServerAPI";

const ProjectsList = ({ boards, setBoards, setActive, activeBoard }) => {
  const handleDelete = async (id) => {
    try {
      await deleteBoard(id);
      const updatedList = await getBoards();
      setBoards(updatedList);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ul className="projects">
      {boards.map((board, index) => (
        <li
          className={index === activeBoard ? css.boardActive : css.board}
          key={board._id}>
          <ProjectsItem
            index={index}
            board={board}
            setActive={setActive}
            handleDelete={handleDelete}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProjectsList;

/* import ProjectsList from "./ProjectsList"; */
import ProjectsList from "./ProjectsList/ProjectsList";
import Icon from "components/Icon";
import "../Sidebar.css";
import { getBoards } from "api/ServerAPI";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Boards = () => {
  const isInit = useRef(false);
  const [boards, setBoards] = useState([]);
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const initBoards = async () => {
      isInit.current = true;
      const boards = await getBoards();
      setBoards(boards);
    };
    if (!isInit.current) initBoards();
  }, []);

  useEffect(() => {
    if (boards.length > 0) navigate(boards[active].name, { replace: true });
  }, [active, boards, navigate]);

  const onSelectBoard = (i) => {
    setActive(i);
  };

  return (
    <div className="boards">
      <p className="boards-heading">My boards</p>
      <button type="button" className="create-button button">
        <span className="create-text">Create a new board</span>
        <div className="create-icon">
          <Icon name={"#plus-icon"} sprite={2} width="20" height="20" />
        </div>
      </button>
      {boards.length > 0 && (
        <ProjectsList
          boards={boards}
          setActive={onSelectBoard}
          activeBoard={active}
        />
      )}
    </div>
  );
};

export default Boards;

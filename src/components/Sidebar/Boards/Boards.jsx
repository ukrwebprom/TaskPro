import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useUser } from "hooks/useUser";
import slug from 'slug';
import ProjectsList from "./ProjectsList/ProjectsList";
import Icon from "components/Icon";
import "../Sidebar.css";
import { getBoards } from "api/ServerAPI";

// import { CardForm } from "components/forms/CardForm/CardForm";

const Boards = () => {
  const { boardName } = useParams()
  const {setCurrentBoard} = useUser();
  const isInit = useRef(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [boards, setBoards] = useState([]);
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const isMyBoard = (name) => {
    return boards.map(b => slug(b.title)).indexOf(name);
  }

  const onSelectBoard = (i) => {
    setActive(i);
    setCurrentBoard(boards[i]);
    const title = boards[i].title;
    const makeSlug = slug(title);
    navigate(makeSlug, { replace: true });
  };

  useEffect(() => {
    const initBoards = async () => {
      isInit.current = true;
      const boards = await getBoards();
      setBoards(boards);
    };
    if (!isInit.current) initBoards();
  }, []);

  useEffect(() => {
    if (boards.length > 0) {
      const boardIndex = isMyBoard(boardName)
      if(boardIndex !== -1) {
        setCurrentBoard(boards[boardIndex]);
        setActive(boardIndex)
      }
      else onSelectBoard(0);
      
    }
  }, [boards, navigate]);

 

  return (
    <div className="boards">
      <p className="boards-heading">My boards</p>
      <button
        type="button"
        onClick={() => setModalIsOpen(true)}
        className="create-button button">
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
      {/* {modalIsOpen && <CardForm />} */}
    </div>
  );
};

export default Boards;

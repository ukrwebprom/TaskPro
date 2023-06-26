import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useUser } from "hooks/useUser";
import slug from "slug";
import { getBoards, deleteBoard } from "api/ServerAPI";
import BoardsItem from "./BoardsItem";
import css from "../Sidebar.module.css";

// import { CardForm } from "components/forms/CardForm/CardForm";

const Boards = () => {
  const { boardName } = useParams();
  const { setCurrentBoard } = useUser();
  const isInit = useRef(false);
  const [boards, setBoards] = useState([]);
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const onSelectBoard = useCallback(
    (i) => {
      setActive(i);
      setCurrentBoard(boards[i]);
      const title = boards[i].title;
      const makeSlug = slug(title);
      navigate(makeSlug, { replace: true });
    },
    [boards, navigate, setCurrentBoard]
  );

  const initBoards = useCallback(() => {
    const boardIndex = boards.map((b) => slug(b.title)).indexOf(boardName);
    if (boardIndex !== -1) {
      setCurrentBoard(boards[boardIndex]);
      setActive(boardIndex);
    } else onSelectBoard(0);
  }, [boardName, boards, onSelectBoard, setCurrentBoard]);

  useEffect(() => {
    const getBoardList = async () => {
      isInit.current = true;
      const boards = await getBoards();
      setBoards(boards);
    };
    if (!isInit.current) getBoardList();
  }, []);

  useEffect(() => {
    if (boards.length > 0) initBoards();
  }, [boards, initBoards]);

  const handleDelete = async (id) => {
    try {
      await deleteBoard(id);
      const updatedList = boards.filter((board) => board._id !== id);
      setBoards(updatedList);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={css.boards}>
      {boards.length > 0 && (
        <ul className={css.projects}>
          {boards.map((board, index) => (
            <li
              className={index === active ? css.boardActive : css.board}
              key={board._id}>
              <BoardsItem
                index={index}
                handleDelete={handleDelete}
                board={board}
                setActive={onSelectBoard}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Boards;

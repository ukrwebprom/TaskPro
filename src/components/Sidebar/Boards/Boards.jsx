import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import slug from "slug";
import BoardsItem from "./BoardsItem";
import css from "../Sidebar.module.css";

const Boards = () => {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards.items);
  const [currBoard, setCurrentBoard] = useState(null);
  const { boardName } = useParams();
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
    if (boards.length > 0) initBoards();
    else navigate("/home", { replace: true });
  }, [boards, initBoards, navigate]);

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

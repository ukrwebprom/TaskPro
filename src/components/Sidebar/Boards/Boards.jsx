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
  const { boards, current } = useBoards();
  const { boardName } = useParams();
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSelect = (index) => {
    dispatch(selectBoard(index));
    const boardSlug = slug(boards[index].title);
    navigate(`/home/${boardSlug}`, { replace: true });
  };
  const handleDelete = (id) => dispatch(deleteBoard(id));

  const ifSlug = useCallback(() => {
    const boardIndex = boards.map((b) => slug(b.title)).indexOf(boardName);
    if (boardIndex !== -1) dispatch(selectBoard(boardIndex));
    else {
      const boardSlug = slug(boards[0].title);
      navigate(`/home/${boardSlug}`, { replace: true });
    }
  }, [boardName, boards, current, navigate, dispatch]);

  useEffect(() => {
    if (boards.length > 0) ifSlug();
    else navigate("/home", { replace: true });
  }, [boards, ifSlug, navigate]);

  return (
    <div className={css.boards}>
      {boards.length > 0 && (
        <ul className={css.projects}>
          {boards.map((board, index) => (
            <li
              className={index === current ? css.boardActive : css.board}
              key={board._id}>
              <BoardsItem
                index={index}
                board={board}
                setActive={handleSelect}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Boards;

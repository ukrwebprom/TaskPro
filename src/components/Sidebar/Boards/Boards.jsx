import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import slug from 'slug';
import { useBoards } from 'hooks/useBoards'
import { selectBoard } from "redux/boards/slice";
import { deleteBoard, updateBoardById } from 'redux/boards/operations';
import BoardsItem from './BoardsItem';
import css from '../Sidebar.module.css';
import { BoardForm } from 'components/forms/BoardForm/BoardForm';
import { useModal } from 'hooks/useModal';

// import { CardForm } from "components/forms/CardForm/CardForm";

const Boards = () => {
  const {getModal, killModal} = useModal();
  const {boards, current} = useBoards();
  const { boardName } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSelect = index => {
    dispatch(selectBoard(index));
    const boardSlug = slug(boards[index].title);
    navigate(`/home/${boardSlug}`, { replace: true });
  }
  const handleDelete = id => {
    dispatch(deleteBoard(id));
  }
  const handleEdit = value => {
    dispatch(updateBoardById(value));
    killModal();
  }
  const ifSlug = useCallback(() => {
    const boardIndex = boards.map(b => slug(b.title)).indexOf(boardName);
    if (boardIndex !== -1) dispatch(selectBoard(boardIndex));
    else {
      dispatch(selectBoard(0));
      const boardSlug = slug(boards[0].title);
      navigate(`/home/${boardSlug}`, { replace: true });
    }
  }, [boardName, boards, navigate, dispatch]);
  
  useEffect(() => {
    if (boards.length > 0) ifSlug();
    else navigate('/home', { replace: true });
  }, [boards, ifSlug, navigate]);

  return (
    <>
    <div className={css.boards}>
      {boards.length > 0 && (
        <ul className={css.projects}>
          {boards.map((board, index) => (
            <li
              className={index === current ? css.boardActive : css.board}
              key={board._id}
            >
              <BoardsItem
                index={index}
                handleEdit={() => getModal("Edit board", <BoardForm onSubmitForm={handleEdit} def={board} type='Edit' />)}
                handleDelete={handleDelete}
                board={board}
                setActive={handleSelect}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
};

export default Boards;

import { useSelector } from 'react-redux';
import {
  selectBoards,
  selectError,
  selectCurrentBoard,
  selectCurrentBoardData
} from 'redux/boards/selectors';

export const useBoards = () => {
  const boards = useSelector(selectBoards);
  const current = useSelector(selectCurrentBoard);
  const error = useSelector(selectError);

  const currentData = useSelector(selectCurrentBoardData);

  return {
    boards,
    current,
    error,
    currentData
  };
};
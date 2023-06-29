import { useSelector } from 'react-redux';
import {
  selectBoards,
  selectError,
  selectCurrentBoard,
} from 'redux/boards/selectors';

export const useBoards = () => {
  const boards = useSelector(selectBoards);
  const current = useSelector(selectCurrentBoard);
  const error = useSelector(selectError);

  return {
    boards,
    current,
    error,
  };
};
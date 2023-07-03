import { useSelector } from 'react-redux';
import {
  selectBoards,
  selectError,
  selectCurrentBoard,
  selectCurrentBoardData,
  selectFilter
} from 'redux/boards/selectors';

export const useBoards = () => {
  const boards = useSelector(selectBoards);
  const current = useSelector(selectCurrentBoard);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const currentData = useSelector(selectCurrentBoardData);

  return {
    boards,
    current,
    error,
    currentData,
    filter
  };
};
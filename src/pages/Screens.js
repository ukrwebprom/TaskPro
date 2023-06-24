import { useParams } from 'react-router-dom';
import { Column } from 'components/Column/Column';
const Screens = () => {
  const { boardName } = useParams();
  return (
    <div>
      <h1>Screens {boardName}</h1>
      <Column />
    </div>
  );
};

export default Screens;

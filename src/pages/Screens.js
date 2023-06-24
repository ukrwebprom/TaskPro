import { useParams } from "react-router-dom";

const Screens = () => {
  const { boardName } = useParams()
    return (
      <div>
        <h1>Screens {boardName}</h1>
      </div>
    );
  };
  
  export default Screens;
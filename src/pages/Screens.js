import { useParams } from "react-router-dom";

const Screens = () => {
  const { id } = useParams()
    return (
      <div>
        <h1>Screens {id}</h1>
      </div>
    );
  };
  
  export default Screens;
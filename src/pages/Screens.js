import { useParams } from "react-router-dom";

const Screens = ({data}) => {
  const { boardName } = useParams()
    return (
      <div>
        <h1>Screens {data}</h1>
      </div>
    );
  };
  
  export default Screens;
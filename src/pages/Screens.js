import { useUser } from "hooks/useUser";

const Screens = () => {
  const { currentBoard } = useUser();

  return (
      <div>
        {currentBoard && <>
        <h1>{currentBoard.title}</h1>
        <h3>Board ID: {currentBoard._id}</h3>
        <h3>Board icon: {currentBoard.icon}</h3>
        <h3>Background: {currentBoard.background}</h3>
        </>
        }
      </div>
    );
  };
  
  export default Screens;
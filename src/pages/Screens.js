// import { useUser } from "hooks/useUser";
import { Suspense } from "react";

const Screens = () => {
  // const { currentBoard } = useUser();
  const currentBoard = null;

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div>
        {currentBoard && <>
        <h1>{currentBoard.title}</h1>
        <h3>Board ID: {currentBoard._id}</h3>
        <h3>Board icon: {currentBoard.icon}</h3>
        <h3>Background: {currentBoard.background}</h3>
        </>
        }
      </div>
    </Suspense>
    );
  };
  
  export default Screens;

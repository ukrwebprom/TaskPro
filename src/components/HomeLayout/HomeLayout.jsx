import css from "./HomeLayout.module.css";
import { useState } from "react";
import Sidebar from "components/Sidebar/Sidebar";
import { useUser } from "hooks/useUser";
import { Header } from "components/Header/Header";
import Task from "components/Task/Task";

export const HomeLayout = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const { theme } = useUser();

  return (
    <div className={css.outer} data-theme={theme}>
      <div className={isSidebar ? css.sidebar : css.hidden}>
        <Sidebar />
      </div>
      {isSidebar && (
        <div className={css.backdrop} onClick={() => setIsSidebar(false)}></div>
      )}
      <div className={css.mainarea}>
        <div className={css.header}>
          <Header toggleSidebar={setIsSidebar} />
        </div>

        {/* TODO: If you dont want see single task comment next div. */}
        {/*                 <div style={{ paddingLeft: 300 }}>
                  <Task
                    columnList={[{name: 'In progress'}, {name: 'Done'}]}
                    taskData={{
                      id: 'frepgm23r-43r4--43rrwefv',
                      levelIndex: 0,
                      endDate: new Date(),
                      title: 'The Watch Spot Design',
                      description:
                        "Create a visually stunning and eye-catching watch dial design that embodies our brand's  essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",
                    }}
                  />
                </div> */}
        {children}
      </div>
    </div>
  );
};

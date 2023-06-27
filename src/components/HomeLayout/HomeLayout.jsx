import css from './HomeLayout.module.css';
import { useState } from 'react';
import Sidebar from 'components/Sidebar/Sidebar';
import { useUser } from 'hooks/useUser';
import { Header } from 'components/Header/Header';
import Filters from 'components/Filters/Filters';
import Task from 'components/Task/Task';

export const HomeLayout = ({children}) => {
    const [isSidebar, setIsSidebar] = useState(false);
    const { theme } = useUser();

    return(
        <div className={css.outer} data-theme={theme}>
            <div className={isSidebar? css.sidebar : css.hidden}>
                <Sidebar />
            </div>
            {isSidebar && <div className={css.backdrop} onClick={() => setIsSidebar(false)}></div>}
            <div className={css.mainarea}>
            
                <div className={css.header}>
                    <Header toggleSidebar={setIsSidebar}/>
                </div>
                {children}
            </div>
            
        </div>
    )
}
import css from './HomeLayout.module.css';
import { useState } from 'react';
import Sidebar from 'components/Sidebar/Sidebar';

export const HomeLayout = ({children}) => {
    const [isSidebar, setIsSidebar] = useState(false);

    return(
        <div className={css.outer}>
            <div className={isSidebar? css.sidebar : css.hidden}>
                <Sidebar />
            </div>
            {isSidebar && <div className={css.backdrop} onClick={() => setIsSidebar(false)}></div>}
            <div className={css.mainarea}>
                <div className={css.header}>
                    <button onClick={() => setIsSidebar(true)}>Show sidebar</button>
                </div>
                {children}
            </div>
        </div>
    )
}
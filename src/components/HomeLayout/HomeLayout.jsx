import css from './HomeLayout.module.css';
import { useState } from 'react';
import Sidebar from 'components/Sidebar/Sidebar';
import { Background } from 'components/Background/Background';
import { Header } from 'components/Header/Header';

import { useAuth } from 'hooks/useAuth';

export const HomeLayout = ({children}) => {
    const [isSidebar, setIsSidebar] = useState(false);
    // const { theme } = useUser();
    const {user} = useAuth();

    return(
        <div className={css.outer} data-theme={user.theme}>
            <div className={isSidebar? css.sidebar : css.hidden}>
                <Sidebar />
            </div>
            {isSidebar && <div className={css.backdrop} onClick={() => setIsSidebar(false)}></div>}
            <div className={css.mainarea}>
            
                <div className={css.header}>
                    <Header toggleSidebar={setIsSidebar}/>
                </div>
                <Background>
                    {children}
                </Background>
            </div>
            
        </div>
    )
}
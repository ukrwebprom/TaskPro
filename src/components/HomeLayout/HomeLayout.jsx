import css from './HomeLayout.module.css';
import { useState } from 'react';
import Sidebar from 'components/Sidebar/Sidebar';
import Button from 'components/Button/Button';
import btn from '../Button/Button.module.css';
import { Link } from 'react-router-dom';
import { useUser } from 'hooks/useUser';
import { Header } from 'components/Header/Header';

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
                    <Header />
 {/*                    <button onClick={() => setIsSidebar(true)}>Show sidebar</button>

                    <Button className={`${btn.btn} ${btn.send}`}>Send</Button>

                    <Button className={`${btn.btn} ${btn.add}`}><div className={btn.plus}>+</div>Add</Button>

                    <Button className={`${btn.btn} ${btn.column}`}><div className={`${btn.plus} ${btn.plusColumn}`}>+</div>Add another column</Button>

                    <Button className={`${btn.btn} ${btn.card}`}><div className={`${btn.plus} ${btn.plusColumn}`}>+</div>Add another card</Button> */}
                </div>
                {children}
            </div>
            
        </div>
    )
}
import { useBoards } from 'hooks/useBoards';
import css from './Task.module.css';
import Icon from 'components/Icon/Icon';

export const MoveList = ({col, onSelect}) => {
    const {currentData} = useBoards();
    const neighbours = currentData.columns.filter(column => column._id !== col);

    return(
        <ul className={css.popover_list}>
            {neighbours.map(n =>(
                <li className={css.popoverItem} key={n._id}>
                <button className={css.popoverBtn} onClick={() => onSelect(n._id)}>
                    <p className={css.popoverStatus}>{n.title}</p>
                    <Icon
                        name={'#arrow-circle-icon'}
                        width="16"
                        height="16"
                        />
                </button>
                </li>
            ))}
            
        </ul>
    )
}
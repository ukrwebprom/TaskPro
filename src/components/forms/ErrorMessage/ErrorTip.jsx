import Icon from "components/Icon/Icon"
import css from './ErrorTip.module.css';
export const ErrorTip =({ e })=> {
    return(
        <div className={css.tip}>
            <Icon name={'#error'} />
            <p className={css.message}>{e}</p>
        </div>
    )
}
import css from '../Dashboard.module.css'



export const Column = ({title}) =>{
   
    return ( <div className={css.column}>
    {title}
        </div>
    )
}

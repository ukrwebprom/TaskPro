import css from './WelcomeLayout.module.css'
export const WelcomeLayout = ({children}) => {
    return(
        <div className={css.container}>
            <div className={css.content}>
                {children}
            </div>
        </div>
    )
}
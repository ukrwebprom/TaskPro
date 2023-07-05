import css from './WelcomeLayout.module.css'
import mainimg from '../../images/welcome-page.png'
import Icon from 'components/Icon/Icon'
export const WelcomeLayout = ({children}) => {
    return(
        <div className={css.container}>
            <div className={css.content}>
            <img className={css.wecomeimage}
            src= {mainimg} 
            alt="welcome to TaskPro" />

            <div className={css.logowrap}>
            <Icon name="#icon-welcome-icon" width="48" height="48" />
            <h1 className={css.title}>Task Pro</h1>
            </div>
            <p className={css.paragraph}>
            Supercharge your productivity and take control of your tasks with
            Task Pro - Don't wait, start achieving your goals now!
            </p>
                {children}
            </div>
        </div>
    )
}
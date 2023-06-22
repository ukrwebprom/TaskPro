import css from './Header.module.css'

export const Header = () => {
  return (
    <div className={css.headerTaskPro}>
        <button className={css.styleTheme}>Theme</button>
        <ul className={css.styleUserInfo}>
            <li className={css.styleName}>Name</li>
            <li className={css.styleAvatar}>
                <button className={css.styleAvatar}>Avatar</button>
            </li>
        </ul>
    </div>
  )
}
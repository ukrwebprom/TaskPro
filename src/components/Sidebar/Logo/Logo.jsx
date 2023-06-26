import css from "./Logo.module.css";
import logoNormal from "../../../images/icon.svg";
import logoInverted from "../../../images/icon-violet.svg";
import { useUser } from "hooks/useUser";

const Logo = () => {
  const { theme } = useUser();
  return (
    <div className={css.container}>
      <a href="/" className={css.logo}>
        <img
          src={theme === "violet" ? logoInverted : logoNormal}
          alt="TaskPro logo"
        />
        <span>Task Pro</span>
      </a>
    </div>
  );
};

export default Logo;

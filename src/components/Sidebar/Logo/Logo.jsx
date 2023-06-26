import css from "./Logo.module.css";
import logoNormal from "../../../images/icon.svg";
import logoInverted from "../../../images/icon-violet.svg";
import { useUser } from "hooks/useUser";
import { Link } from "react-router-dom";

const Logo = () => {
  const { theme } = useUser();
  return (
    <div className={css.container}>
      <Link to="/" className={css.logo}>
        <img
          src={theme === "violet" ? logoInverted : logoNormal}
          alt="TaskPro logo"
        />
        <span>Task Pro</span>
      </Link>
    </div>
  );
};

export default Logo;

import "../Sidebar.css";
import logoNormal from "../../../images/icon.svg";
import logoInverted from "../../../images/icon-violet.svg";
import { useUser } from "hooks/useUser";

const Logo = () => {
  const {theme} = useUser();
  return (
    <a href="/" className="logo">
      <img src={theme == 'violet'? logoInverted : logoNormal} />
      <span>Task Pro</span>
    </a>
  );
};

export default Logo;

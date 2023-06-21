import logoIcon from "../../../logo.svg";

const Logo = () => {
  return (
    <a href="">
      <svg>
        <use href={logoIcon} />
      </svg>
      <span>Task Pro</span>
    </a>
  );
};

export default Logo;

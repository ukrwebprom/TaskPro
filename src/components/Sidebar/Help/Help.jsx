import css from '../Sidebar.module.css';
import Icon from "components/Icon";

const Help = () => {
  return (
    <div className={css.help}>
      <div className={css.helpHeader}></div>
      <p className={css.helpText}>
        If you need help with <span className={css.helpTextAccent}>TaskPro</span>,
        check out our support resources or reach out to our customer support
        team.
      </p>
      <button type="button" className={css.helpButton}>
        <Icon name={"#help-circle-icon"} sprite={2} width="20" height="20" />
        <span>Need help?</span>
      </button>
    </div>
  );
};

export default Help;

import "../Sidebar.css";

const Help = () => {
  return (
    <div className="help">
      <div className="help-header"></div>
      <p className="help-text">
        If you need help with <span className="help-text-accent">TaskPro</span>,
        check out our support resources or reach out to our customer support
        team.
      </p>
      <button type="button" className="help-button button">
        <svg className="help-icon">
          <use href="" />
        </svg>
        <span>Need help?</span>
      </button>
    </div>
  );
};

export default Help;
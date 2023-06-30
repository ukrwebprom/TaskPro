import css from '../Sidebar.module.css';
import Icon from "components/Icon";
import Modal from 'components/Modal/Modal';
import { HelpForm } from 'components/forms/HelpForm/HelpForm';
import { useState } from 'react';
const Help = () => {
  const [showModal, setShowModal] = useState(false);
const toggleModal = () => setShowModal(c => !c);

  return (
    <div className={css.help}>
      <div className={css.helpHeader}></div>
      <p className={css.helpText}>
        If you need help with <span className={css.helpTextAccent}>TaskPro</span>,
        check out our support resources or reach out to our customer support
        team.
      </p>
      <button type="button" className={css.helpButton} onClick={toggleModal} >
        <Icon name={"#help-circle-icon"} sprite={2} width="20" height="20" />
        <span>Need help?</span>
      </button>   
      {showModal && <Modal onClose={toggleModal} name="Need Help">
         <HelpForm/>
      </Modal>}
    </div>
  );
};

export default Help;

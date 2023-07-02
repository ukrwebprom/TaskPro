import css from '../Sidebar.module.css';
import Icon from "components/Icon";
import Modal from "components/Modal/Modal";
import { useModal } from "hooks/useModal";
import { useState } from "react";
import { HelpForm } from 'components/forms/HelpForm/HelpForm';
import { useDispatch } from 'react-redux';
import { sendComment } from 'redux/auth/operations';

const Help = () => {
  const {getModal, killModal} = useModal();
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(c => !c);
  const dispatch = useDispatch();

  const handleSendMessage = (value) => {
  dispatch(sendComment(value));
  killModal();
}
  return (
    <>
    <div className={css.help}>
      <div className={css.helpHeader}></div>
      <p className={css.helpText}>
        If you need help with <span className={css.helpTextAccent}>TaskPro</span>,
        check out our support resources or reach out to our customer support
        team.
      </p>
      <button type="button" className={css.helpButton} onClick={() => getModal("Support", <HelpForm onSubmitForm={handleSendMessage} type='Send' />)}>
        <Icon name={"#help-circle-icon"} sprite={2} width="20" height="20" />
        <span>Need help?</span>
      </button>
    </div>

    {showModal && <Modal onClose={toggleModal} name="Support">
        <HelpForm onSubmitForm={handleSendMessage}/>
      </Modal>}
    </>
  );
};

export default Help;

import { createContext, useContext, useState, useRef, useEffect } from "react";
import Modal from "components/Modal/Modal";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModelProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState('');
  const [position, setPosition] = useState({})

  const setClickPosition = e => {
    const {x, y} = e;
    const pos = {};
    if(x > window.innerWidth /2) pos.right = window.innerWidth - x;
    else pos.left = x;
    if(y > window.innerHeight /2) pos.bottom = window.innerHeight - y;
    else pos.top = y;
    setPosition(pos);
  }
  const getModal = (title, insert) => {
    setTitle(title);
    setContent(insert);
    setShowModal(true);
  }
  const killModal = () => {
    setContent(null);
    setShowModal(false);
  }
  useEffect(() => {
    window.addEventListener('click', setClickPosition);
    return () => window.removeEventListener('click', setClickPosition);
    }, [])
  
   return (
     <ModalContext.Provider
       value={{ getModal, killModal }}>
        {showModal && 
          <Modal onClose={killModal} name={title} position={position}>
            {content}
          </Modal>}
       {children}
     </ModalContext.Provider>
   );
};

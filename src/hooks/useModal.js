import { createContext, useContext, useState, useEffect } from "react";
import Modal from "components/Modal/Modal";
import Popover from "components/Modal/Popover";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModelProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const [content, setContent] = useState(null);
  const [popoverContent, setPopoverContent] = useState(null);
  const [title, setTitle] = useState('');
  const [position, setPosition] = useState({});
  const [modalHeight, setModalHeight] = useState(0);
  const [lastClick, setLastClick] = useState({})

  const setClickPosition = e => {
    const {x, y} = e;
    setLastClick({x, y});
  }

  useEffect(() => {
    const {x, y} = lastClick;
    const pos = {};
    const h = window.innerHeight;
    if(x > window.innerWidth /2) pos.right = window.innerWidth - x;
    else pos.left = x;
    if(y > h /2) pos.bottom = h - y + Math.min(0, (y-modalHeight));
    else pos.top = y - Math.max(0, (modalHeight - (h - y)));
    setPosition(pos);
  }, [lastClick, modalHeight])

  const getModal = (title, insert) => {
    setModalHeight(545);
    setTitle(title);
    setContent(insert);
    setShowModal(true);
  }
  const getPopover = (insert) => {
    setModalHeight(0);
    setPopoverContent(insert);
    setShowPopover(true);
  }
  const killModal = () => {
    setContent(null);
    setShowModal(false);
  }
  const killPopover = () => {
    setPopoverContent(null);
    setShowPopover(false);
  }
  useEffect(() => {
    window.addEventListener('click', setClickPosition);
    return () => window.removeEventListener('click', setClickPosition);
    }, [])
  
   return (
     <ModalContext.Provider
       value={{ getModal, killModal, getPopover, killPopover }}>
        {showModal && 
          <Modal onClose={killModal} name={title} position={position}>
            {content}
          </Modal>}
          {showPopover && 
          <Popover onClose={killPopover} position={position}>
            {popoverContent}
          </Popover>}
       {children}
     </ModalContext.Provider>
   );
};

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children, close }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open])


  return createPortal(
    <dialog className="modal" ref={dialog} onClose={close}>
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;

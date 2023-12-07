import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const Modal = ({ isOpens, onCloses }) => {
  return (
    <Modal
      isOpen={isOpens}
      onRequestClose={onCloses}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button onClick={onCloses}>close</button>
    </Modal>
  );
};

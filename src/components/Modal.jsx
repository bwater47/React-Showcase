import "../Styles/Modal.css"; // Add styling for the modal

const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <button className="modal-button" onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default Modal;

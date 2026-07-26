import "../Styles/VideoModal.css";

const VideoModal = ({ isOpen, onClose, title, embedUrl }) => {
  if (!isOpen) return null;

  return (
    <div
      className="video-modal-overlay"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="video-modal-content"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <button
          type="button"
          className="video-modal-close"
          onClick={onClose}
          aria-label="Close video"
        >
          Close
        </button>
        <div className="video-modal-frame">
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;

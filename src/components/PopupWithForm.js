export default function PopupWithForm({ name, title, children, buttonText, isOpen, onClose, onSubmit }) {
  return (
    <div className={`popup ${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <form
          className="popup__form"
          name={name}
          onSubmit={onSubmit}
        >
          <h3
            className="popup__title">
            {title}
          </h3>

          {children}

          <button
            className="popup__submit"
            type="submit">
            {buttonText}
          </button>
        </form>

        <button
          type="button"
          className="popup__btn-close"
          onClick={onClose}
        ></button>

      </div>
    </div>
  )
}

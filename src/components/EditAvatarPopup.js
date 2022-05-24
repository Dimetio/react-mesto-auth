import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();
  const [buttonText, setButtonText] = React.useState('Сохранить');

  function handleSubmit(e) {
    e.preventDefault();
    setButtonText('Сохранение...');
    onUpdateAvatar({ avatar: avatarRef.current.value })
      .then(() => onClose())
      .catch(err => console.log(err))
      .finally(() => setButtonText('Сохранить'));
  }

  React.useEffect(() => {
    avatarRef.current.value = '';
  }, [isOpen]);

  return (
    <PopupWithForm
      name="popup-avatar"
      title="Обновить аватар"
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input
          ref={avatarRef}
          name="avatar"
          type="url"
          id="avatar-input"
          className="popup__input popup__input_avatar"
          placeholder="Ссылка на картинку"
          required
        />

        <span className="popup__input-error avatar-input-error"></span>
      </label>
    </PopupWithForm>
  )
}

import React from 'react'
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);
  const [buttonText, setButtonText] = React.useState('Сохранить');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about)
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    setButtonText('Сохранение...');
    onUpdateUser({
      name,
      about: description,
    })
      .then(() => onClose())
      .catch(err => console.log(err))
      .finally(() => setButtonText('Сохранить'));
  }

  return (
    <PopupWithForm
      name="popup-edit"
      title="Ретактировать профиль"
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input
          name="name"
          type="text"
          id="name-input"
          className="popup__input popup__input_name"
          placeholder="Имя"
          required
          minLength="2"
          maxLength="40"
          value={name || ""}
          onChange={handleNameChange}
        />
        <span className="popup__input-error name-input-error"></span>
      </label>

      <label className="popup__label">
        <input
          name="about"
          type="text"
          id="about-input"
          className="popup__input popup__input_about"
          placeholder="О себе"
          required
          minLength="2"
          maxLength="200"
          value={description || ""}
          onChange={handleDescriptionChange}
        />
        <span className="popup__input-error about-input-error"></span>
      </label>
    </PopupWithForm>
  )
}

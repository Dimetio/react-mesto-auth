import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');
  const [buttonText, setButtonText] = React.useState('Создать');

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeLink(e) {
    setLink(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    setButtonText('Создание...');
    onAddPlace({ name, link })
      .then(() => onClose())
      .catch(err => console.log(err))
      .finally(() => setButtonText('Создать'));
  }

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  return (
    <PopupWithForm
      name="popup-add"
      title="Новое место"
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input
          name="name"
          type="text"
          id="title-input"
          className="popup__input popup__input_title"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
          value={name || ""}
          onChange={handleChangeName}
        />

        <span className="popup__input-error title-input-error"></span>
      </label>

      <label className="popup__label">
        <input
          name="link"
          type="url"
          id="link-input"
          className="popup__input popup__input_link"
          placeholder="Ссылка на картинку"
          required
          value={link || ""}
          onChange={handleChangeLink}
        />

        <span className="popup__input-error link-input-error"></span>
      </label>
    </PopupWithForm>
  )
}

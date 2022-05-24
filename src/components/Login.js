//import {useState} from 'react';

export default function Login() {
  //const [formParams, setFormParams] = useState({email: "", password: ""})
  return (
    <div className="sign">
      <form className="sign__form">
        <h2 className="sign__title">Вход</h2>

        <input
          className="sign__input"
          type="email"
          name="email"
          placeholder="email"
          required
          value=""
        />

        <input
          className="sign__input"
          type="password"
          name="password"
          placeholder="Пароль"
          required
          minLength="4"
          maxLength="12"
          value=""
        />

        <button className="sign__submit">Войти</button>
      </form>
    </div>
  )
}

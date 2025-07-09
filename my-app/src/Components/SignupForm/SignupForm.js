import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) ?? defaultValue,
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  },[key, state])

  return [state, setState];
};

export default function SignupForm() {
  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

  const handleFormChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };


  return (
    <form autoComplete="off">
      <label>
        <span>Post</span>
        <input
          type="email"
          name="email"
          onChange={handleFormChange}
          value={email}
        />
      </label>

      <label>
        <span>Paswword</span>
        <input
          type="password"
          name="password"
          onChange={handleFormChange}
          value={password}
        />
      </label>

      <button type="submit">Login in</button>
    </form>
  );
}

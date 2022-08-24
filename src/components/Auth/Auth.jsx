import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, loginUser } from 'redux/auth/authOperations';

export const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  // const users = useSelector(state => (state.user ? state.user.email : ''));

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmitRegister = e => {
    e.preventDefault();

    // if (users.find(user => user.email.toLowerCase() === email.toLowerCase()))
    //   return alert(`${email} is already in users.`);

    dispatch(registerUser({ email: email, password: password }));
    console.log('🚀 ~ email', email);

    reset();
  };

  const handleSubmitLogin = e => {
    e.preventDefault();

    // if (users.find(user => user.email.toLowerCase() === email.toLowerCase()))
    //   return alert(`${email} is already in users.`);

    dispatch(loginUser({ email: email, password: password }));

    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <form>
      <label>
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="text"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button type="submit" onClick={handleSubmitLogin}>
        LOG IN
      </button>
      <button type="submit" onClick={handleSubmitRegister}>
        REGISTRATION
      </button>
    </form>
  );
};

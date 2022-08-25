import { useDispatch } from 'react-redux';
import React from 'react';
import { useFormik } from 'formik';
import { registerUser, loginUser } from 'redux/auth/authOperations';
import s from './Auth.module.css';

export const Auth = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleSubmitRegister = e => {
    e.preventDefault();

    dispatch(
      registerUser({
        email: formik.values.email,
        password: formik.values.password,
      })
    );

    reset();
  };

  const handleSubmitLogin = e => {
    e.preventDefault();

    dispatch(
      loginUser({
        email: formik.values.email,
        password: formik.values.password,
      })
    );

    reset();
  };

  const reset = () => {
    formik.values.email = '';
    formik.values.password = '';
  };
  return (
    <form className={s.form} onSubmit={formik.handleSubmit}>
      <p className={s.item}> You can log in with your Google Account:</p>
      <button className={s.google} type="button">
        Google
      </button>
      <p className={s.item}>
        Or log in using an email and password, after registering:
      </p>
      <div>
        <p className={s.text}>
          <span className={s.span}>*</span>Email:
        </p>
        <label className={s.label}>
          <input
            className={s.input}
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </label>
        <p className={s.discr}>This is a required field</p>
      </div>
      <div>
        <p className={s.text}>
          <span className={s.span}>*</span>Password:
        </p>
        <label className={s.label}>
          <input
            className={s.input}
            id="password"
            name="password"
            type="text"
            placeholder="your password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </label>
        <p className={s.discr}>This is a required field</p>
      </div>
      <>
        <div>
          <button
            className={s.button}
            type="submit"
            onClick={handleSubmitLogin}
          >
            LOG IN
          </button>
          <button
            className={s.button}
            type="submit"
            onClick={handleSubmitRegister}
          >
            REGISTRATION
          </button>
        </div>
      </>
    </form>
  );
};

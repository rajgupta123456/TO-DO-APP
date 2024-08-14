import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useAuth } from '../context/AuthContext'; // Ensure correct path

const Login = () => {
  const { login } = useAuth(); // Make sure this is correctly defined in your AuthContext

  const handleSubmit = (values, { setSubmitting }) => {
    if (login) {
      login(values.username, values.password); // Use login function
    } else {
      console.error('Login function is not defined');
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field type="text" name="username" placeholder="Username" />
        <Field type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default Login;

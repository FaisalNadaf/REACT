import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle login logic here
    console.log("Login values:", values);
    setSubmitting(false);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-wrap">
      <div className="w-1/3">
        {" "}
        <h1 className="flex items-center justify-center text-4xl font-bold p-4 ">
          signUp
        </h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={validate}
        >
          {({ isSubmitting }) => (
            <Form className="">
              <div className="flex justify-between text-xl font-semibold py-1">
                <label htmlFor="firstName">firstName</label>
                <Field className='border border-black rounded-md' type="text" name="firstName" />
                <ErrorMessage name="firstName" component="div" />
              </div>
              <div className="flex justify-between text-xl font-semibold py-1">
                <label htmlFor="lastName">lastName</label>
                <Field className='border border-black rounded-md' type="text" name="lastName" />
                <ErrorMessage name="lastName" component="div" />
              </div>
              <div className="flex justify-between text-xl font-semibold py-1">
                <div>
                  {" "}
                  <span>
                    <label htmlFor="gender">male</label>
                    <Field className='border border-black rounded-md' type="radio" name="gender" />
                    <ErrorMessage name="gender" component="div" />
                  </span>
                  <span>
                    <label htmlFor="gender">female</label>
                    <Field className='border border-black rounded-md' type="radio" name="gender" />
                    <ErrorMessage name="gender" component="div" />
                  </span>
                </div>
              </div>
              <div className="flex justify-between text-xl font-semibold py-1">
                <label htmlFor="email">Email</label>
                <Field className='border border-black rounded-md' type="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </div>
              <div className="flex justify-between text-xl font-semibold py-1">
                <label htmlFor="password">Password</label>
                <Field className='border border-black rounded-md' type="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </div>
              <div className="flex justify-between text-xl font-semibold py-1">
                <label htmlFor="comformPassword">comformPassword</label>
                <Field className='border border-black rounded-md' type="comformPassword" name="comformPassword" />
                <ErrorMessage name="comformPassword" component="div" />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;

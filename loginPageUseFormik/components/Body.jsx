import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Login = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle login logic here
    console.log("Login values:", values);
    setSubmitting(false);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    }
    if (!values.lastName) {
      errors.lastName = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Not Matching";
    }
    return errors;
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-wrap">
      <div className="w-1/3 relative">
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
              <div className="flex justify-between text-xl font-semibold py-1 ">
                <label htmlFor="firstName">firstName</label>
                <Field
                  className="border border-black rounded-md"
                  type="text"
                  name="firstName"
                />
                <ErrorMessage
                  className="text-[#FF0000] font-light absolute right-[-80px]"
                  name="firstName"
                  component="div"
                />
              </div>
              <div className="flex justify-between text-xl font-semibold py-1">
                <label htmlFor="lastName">lastName</label>
                <Field
                  className="border border-black rounded-md"
                  type="text"
                  name="lastName"
                />
                <ErrorMessage
                  className="text-[#FF0000] font-light absolute right-[-80px]"
                  name="lastName"
                  component="div"
                />
              </div>
              <div className="flex justify-between text-xl font-semibold py-1">
                <div>
                  <span className="px-2">
                    <label className="px-2" htmlFor="gender">
                      male
                    </label>
                    <Field
                      className="border border-black rounded-md"
                      type="radio"
                      name="gender"
                    />
                    <ErrorMessage
                      className="text-[#FF0000] font-light absolute right-[-80px]"
                      name="gender"
                      component="div"
                    />
                  </span>
                  <span className="px-2">
                    <label className="px-2" htmlFor="gender">
                      female
                    </label>
                    <Field
                      className="border border-black rounded-md"
                      type="radio"
                      name="gender"
                    />
                    <ErrorMessage
                      className="text-[#FF0000] font-light absolute right-[-80px]"
                      name="gender"
                      component="div"
                    />
                  </span>
                </div>
              </div>
              <div className="flex justify-between text-xl font-semibold py-1">
                <label htmlFor="email">Email</label>
                <Field
                  className="border border-black rounded-md"
                  type="email"
                  name="email"
                />
                <ErrorMessage
                  className="text-[#FF0000] font-light absolute right-[-80px]"
                  name="email"
                  component="div"
                />
              </div>
              <div className="flex justify-between text-xl font-semibold py-1">
                <label htmlFor="password">Password</label>
                <Field
                  className="border border-black rounded-md"
                  type="password"
                  name="password"
                />
                <ErrorMessage
                  className="text-[#FF0000] font-light absolute right-[-80px]"
                  name="password"
                  component="div"
                />
              </div>
              <div className="flex justify-between text-xl font-semibold py-1">
                <label htmlFor="confirmPassword">confirmPassword</label>
                <Field
                  className="border border-black rounded-md"
                  type="confirmPassword"
                  name="confirmPassword"
                />
                <ErrorMessage
                  className="text-[#FF0000] font-light absolute right-[-120px]"
                  name="confirmPassword"
                  component="div"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-center text-xl rounded-full px-8 my-4 bg-[#5bc0de] font-medium py-1"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;

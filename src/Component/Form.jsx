import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Form.css";

const MyForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);

    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Your Name"
          />
          <ErrorMessage name="firstName" component="div" />

          <label htmlFor="lastName">Last Name</label>
          <Field
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
          />
          <ErrorMessage name="lastName" component="div" />

          <label htmlFor="email">Email</label>
          <Field type="text" id="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default MyForm;

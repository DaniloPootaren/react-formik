import React from "react";
import { Formik } from "formik";

import Schema from "./schema";

function WithFormik(props) {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    age: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Schema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form className="form" onSubmit={handleSubmit}>
          <input
            className={errors.firstname && "invalid"}
            type="text"
            name="firstname"
            placeholder="Firstname"
            value={values.firstname}
            onChange={handleChange}
          />
          <input
            className={errors.lastname && "invalid"}
            type="text"
            name="lastname"
            placeholder="Lastname"
            value={values.lastname}
            onChange={handleChange}
          />
          <input
            className={errors.email && "invalid"}
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={values.email}
          />
          <input
            className={errors.age && "invalid"}
            type="text"
            name="age"
            placeholder="Age"
            value={values.age}
            onChange={handleChange}
          />
          <input
            className={errors.address && "invalid"}
            type="text"
            name="address"
            placeholder="Address"
            value={values.address}
            onChange={handleChange}
          />
          <input className="submit-button" type="submit" value="Submit" />
        </form>
      )}
    </Formik>
  );
}

export default WithFormik;

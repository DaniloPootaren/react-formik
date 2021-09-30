import React, { useState } from "react";

function WithoutFormik(props) {
  /// state for form value
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  /// state for form errors
  const [firstnameError, setFirstnameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [addressError, setAddressError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!firstname && !lastname && !age && !email && !address) {
      if (firstname === "") {
        setFirstnameError(true);
      }
      if (lastname === "") {
        setLastnameError(true);
      }
      if (age === "") {
        setAgeError(true);
      }
      if (address === "") {
        setAddressError(true);
      }
      if (email === "") {
        setEmailError(true);
      }
    } else {
      alert(`${firstname},${lastname}, ${age},${address}, ${email}`);
    }
  };

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    if (fieldName === "firstname") {
      setFirstname(fieldValue);
    }
    if (fieldName === "lastname") {
      setLastname(fieldValue);
    }
    if (fieldName === "email") {
      setEmail(fieldValue);
    }
    if (fieldName === "address") {
      setAddress(fieldValue);
    }
    if (fieldName === "age") {
      setAge(fieldValue);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className={firstnameError && "invalid"}
        type="text"
        name="firstname"
        placeholder="Firstname"
        value={firstname}
        onChange={handleChange}
      />
      <input
        className={lastnameError && "invalid"}
        type="text"
        name="lastname"
        placeholder="Lastname"
        value={lastname}
        onChange={handleChange}
      />
      <input
        className={emailError && "invalid"}
        type="text"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={email}
      />
      <input
        className={ageError && "invalid"}
        type="text"
        name="age"
        placeholder="Age"
        value={age}
        onChange={handleChange}
      />
      <input
        className={addressError && "invalid"}
        type="text"
        name="address"
        placeholder="Address"
        value={address}
        onChange={handleChange}
      />
      <input className="submit-button" type="submit" value="Submit" />
    </form>
  );
}

export default WithoutFormik;

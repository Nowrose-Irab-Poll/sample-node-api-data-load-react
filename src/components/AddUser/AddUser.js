import React, { useRef } from "react";

const AddUser = ({ handleAddUserFromParent }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;

    const newUser = { name, email, phone };

    handleAddUserFromParent(newUser);

    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
  };

  return (
    <div>
      <h4>Add New User</h4>
      <form onSubmit={handleAddUser}>
        <input type="text" ref={nameRef} placeholder="Your Name" />
        <br />
        <input type="email" ref={emailRef} placeholder="Your Email" />
        <br />
        <input type="text" ref={phoneRef} placeholder="Your Phone" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddUser;

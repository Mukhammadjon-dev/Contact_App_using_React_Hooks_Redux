import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate1 = useNavigate();
  const navigate2 = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const checkEmail = contacts.find(
      (contact) => contact.email === email && email
    );
    const checkNumber = contacts.find(
      (contact) => contact.number === parseInt(number)
    );
    if (!email || !number || !name) {
      return toast.warning("Please fill in all fields");
    }
    if (checkEmail) {
      return toast.error("This email already Exists ! ");
    }
    if (checkNumber) {
      return toast.error("This number already Exists ! ");
    }
    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      number,
    };

    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Student's information added successfully");
    navigate1("/");
  }
  function cancelAdd() {
    navigate2("/");
  }

  return (
    <div className="container">
      <h1 className="display-3 text-center my-3"> Add Student </h1>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group my-3">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group  my-3">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group  my-3">
              <input
                type="number"
                placeholder="Phone number"
                className="form-control  my-3"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="row mx-5 mt-4 justify-content-around">
              <input
                type="button"
                value="Cancel"
                className="btn btn-block btn-danger col-5"
                onClick={cancelAdd}
              />
              <input
                type="submit"
                value="Add Student"
                className="btn btn-block btn-success col-5"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default AddContact;

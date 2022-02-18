import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

function EditContact() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const { id } = useParams();
  console.log(id);
  const contacts = useSelector((state) => state);

  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );
  console.log(currentContact);
  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);
  function handleSubmit(e) {
    e.preventDefault();
    const checkEmail = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.email === email
    );
    const checkNumber = contacts.find(
      (contact) =>
        contact.id !== parseInt(id) && contact.number === parseInt(number)
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
      id: parseInt(id),
      name,
      email,
      number,
    };

    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Student's data updated successfully");
    navigate("/");
  }

  return (
    <div className="container">
      {currentContact ? (
        <div>
          <h1 className="display-3 text-center my-3"> Edit Student {id}</h1>
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
                <div className="form-group mt-3">
                  <input
                    type="submit"
                    value="Update Student"
                    className="btn btn-dark"
                  />
                  <Link to="/" className="btn btn-danger ml-3">
                    {" "}
                    Cancel{" "}
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-center mt-5">
          {" "}
          Student contact with id <b className="text-primary">{id}</b> not
          exists{" "}
        </h1>
      )}
    </div>
  );
}
export default EditContact;

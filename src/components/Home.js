import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
function Home() {
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Contact deleted successfully!");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12  my-4 d-flex justify-content-end">
          <Link to="/add" className="btn btn-success p-2 pt-3">
            <h5> Add New Student Contact </h5>
          </Link>
        </div>
        <div className="mx-auto">
          <table className="table table-hover">
            <thead className="text-white bg-dark text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col"> Name </th>
                <th scope="col"> Email </th>
                <th scope="col"> Number </th>
                <th scope="col"> Action </th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.number}</td>
                  <td className="d-flex justify-content-around">
                    <Link
                      to={`/edit/${contact.id}`}
                      className="btn btn-small btn-primary col-4"
                    >
                      {" "}
                      Edit{" "}
                    </Link>
                    <button
                      type="button"
                      className="btn btn-small btn-danger col-5"
                      onClick={() => deleteContact(contact.id)}
                    >
                      {" "}
                      Delete{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Home;

import { useState, useEffect } from "react";
import form from "./style.css";

const initialFormValues = { fullName: "", phoneNumber: "" };

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullName === "" || form.phoneNumber === "") {
      return false;
    }

    addContact([...contacts, form]);
  };
  return (
    <form className="mt-5" onSubmit={onSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control bg-light rounded-pill "
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={onChangeInput}
        ></input>
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control bg-light rounded-pill numberInput "
          name="phoneNumber"
          placeholder="Phone Number"
          value={form.phoneNumber}
          onChange={onChangeInput}
        ></input>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary rounded-pill  ">
          Add
        </button>
      </div>
    </form>
  );
}

export default Form;

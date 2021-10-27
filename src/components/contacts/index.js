import { useState, useEffect } from "react";
import contacts from "./style.css";

import Form from "./form";
import List from "./list";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullName: "Mehmet Eren",
      phoneNumber: 5348881414,
    },
    {
      fullName: "Ali Kaya",
      phoneNumber: 5348881515,
    },
    {
      fullName: "Fatma Durmaz",
      phoneNumber: 5348881616,
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div className="containerCon">
      <h1 className="mb-4 text-center">Filterable List</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;

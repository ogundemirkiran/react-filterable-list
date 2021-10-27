import { useState } from "react";
import list from "./style.css";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  console.log(filtered);

  return (
    <div>
      <input
        className="form-control bg-light rounded-pill mb-4"
        placeholder="filter"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      ></input>
      <ul className="list-group list-group-flush">
        {filtered.map((item, index) => (
          <li
            className="list-group-item  bg-light rounded-lg mb-2 "
            key={index}
          >
            <span>{item.fullName}</span>
            <span>{item.phoneNumber}</span>
          </li>
        ))}
      </ul>

      <p className="mt-3 font-weight-bold"> {filtered.length} List items </p>
    </div>
  );
}

export default List;

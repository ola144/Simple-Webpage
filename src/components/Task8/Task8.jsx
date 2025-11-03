import { useState } from "react";
import Form from "./Form/Form";
import DataTable from "./DataTable/DataTable";
import Button from "./Button/Button";
import "./Task8.css";

const Task8 = () => {
  const [users, setUsers] = useState([]);

  const handleFormSubmit = (data) => {
    setUsers((prev) => [...prev, data]);
  };

  return (
    <div className="app-container">
      <h1>Reusable React Components Demo</h1>

      <Form onSubmit={handleFormSubmit} />

      {users.length > 0 && (
        <div className="submitted-table">
          <h2>Submitted Users</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Agreed</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={i}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.agree ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <DataTable />

      <Button
        label="Console Log Users"
        onClick={() => console.log(users)}
        className="log-btn"
      />
    </div>
  );
};

export default Task8;

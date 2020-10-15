import React from 'react';
import { Table, Button } from 'react-bootstrap';
// Importing component's custom css this css can affect other components too so write it carefully for this specific component
import './local/css/Ninjas.css';
// [UI/State less component]
// Another type of destructuring with default parameters
function Ninjas({ ninjas = [], deleteNinja, editNinja }) {
  const ninjaList = (ninjas.length) ? (
    ninjas.map(ninja => {
      if (ninja.age > 5) {
        return (
          <tr key={ninja.id}>
            <td>{ninja.id}</td>
            <td>{ninja.name}</td>
            <td>{ninja.age}</td>
            <td>{ninja.belt}</td>
            {/* Stopping the function to auto invoke on page load */}
            <td>
              <Button variant="primary" size="sm" onClick={() => { editNinja(ninja.id) }}>Edit</Button>
            </td>
            <td>
              <Button variant="danger" size="sm" onClick={() => { deleteNinja(ninja.id) }} className="ml-2">Delete</Button>
            </td>
          </tr>
        );
      } else {
        return null
      }
    })
  ) : (
    <tr><td colSpan="6" className="text-center"><b>No ninja left add a new one</b></td></tr>
  );
  return (
    <div className="ninjas mt-3">
      <small>(child component) {Math.random()}</small>
      <Table striped bordered hover className="ninjas-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Belt</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {ninjaList}
        </tbody>
      </Table>
    </div>
  );
}

export default Ninjas;

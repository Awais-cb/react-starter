import React from 'react';
import { Table, Button } from 'react-bootstrap';
// [UI/State less component]
// Another type of destructuring with default parameters
function Ninjas({ ninjas = [], deleteNinja }) {
  const ninjaList = ninjas.map(ninja => {
    if (ninja.age > 20) {
      return (
        <tr key={ninja.id}>
          <td>{ninja.id}</td>
          <td>{ninja.name}</td>
          <td>{ninja.age}</td>
          <td>{ninja.belt}</td>
          {/* Stopping the function to auto invoke on page load */}
          <td><Button variant="danger" size="sm" onClick={() => { deleteNinja(ninja.id) }}>Delete</Button></td>
        </tr>
      );
    } else {
      return null
    }
  })
  return (
    <div className="ninjas mt-3">
      <small>(child component)</small>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Belt</th>
            <th>Actions</th>
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

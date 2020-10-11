import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'
// This component is going to be a class component because its a form and a form has to maintain it's own state
class AddNinja extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      age: null,
      belt: null
    }
  }

  handleChange = (e) => {
    // Setting state of field dynamically
    this.setState({
      // [e.target.id] -> name, age, belt 
      [e.target.id]: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault()
    // Functions as Props
    this.props.addNinja(this.state)
  }
  render() {
    return (
      <div>
        <small>(child component)</small>
        <Card>
          <Card.Body>
            <Card.Title>Add new ninja</Card.Title>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Ninja Name" onChange={this.handleChange} />
                <Form.Text className="text-muted"> We'll never share your name/details with anyone else. </Form.Text>
              </Form.Group>
              <Form.Group controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Ninja Age" onChange={this.handleChange} />
                <Form.Text className="text-muted"> Age should be greater than 20. </Form.Text>
              </Form.Group>
              <Form.Group controlId="belt">
                <Form.Label>Belt</Form.Label>
                <Form.Control type="text" placeholder="Ninja Belt" onChange={this.handleChange} />
              </Form.Group>
              <Button variant="primary" type="submit"> Add ninja </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default AddNinja;
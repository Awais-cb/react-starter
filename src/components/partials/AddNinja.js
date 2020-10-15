import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'
// This component is going to be a class component because its a form and a form has to maintain it's own state
class AddNinja extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      belt: '',
      randomAttribute: null
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
    this.setState({
      name: '',
      age: '',
      belt: ''
    });
  }

  // Life cycle hooks start
  componentDidMount = () => {
    console.log('[CHILD COMPONENT] AddNinja componentDidMount')
  }

  componentDidUpdate = (prevProps, prevState, snapShot) => {
    console.log('[CHILD COMPONENT] AddNinja componentDidUpdate')
  }

  componentWillUnmount = () => {
    console.log('[CHILD COMPONENT] AddNinja componentWillUnmount')
  }

  shouldComponentUpdate = () => {
    return true
  }

  // Allow us to copy props to state
  static getDerivedStateFromProps = (props, state) => {
    console.log('[CHILD COMPONENT] AddNinja getDerivedStateFromProps')
    /*
    if (props.randomAttribute && state.randomAttribute !== state.randomAttribute) {
      return {
        randomAttribute: props.randomAttribute
      }
    }
    */
    return null
  }

  getSnapshotBeforeUpdate = () => {
    console.log('[CHILD COMPONENT] AddNinja getSnapshotBeforeUpdate')
    return null
  }

  // Used to handle errors gracefully helps rendering component instead of blank screen
  componentDidCatch = (error, info) => {
    console.log('[CHILD COMPONENT] AddNinja componentDidCatch')
    console.log(error, info)
    this.setState({ error, info })
  }
  // Life cycle hooks end

  render() {
    return (
      <div>
        <small>(child component) {Math.random()}</small>
        {(this.state.error) ? <p> {this.state.error.message} </p> : ''}
        <Card>
          <Card.Body>
            <Card.Title>Add new ninja</Card.Title>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Ninja Name" onChange={this.handleChange} value={this.state.name} />
                <Form.Text className="text-muted"> We'll never share your name/details with anyone else. </Form.Text>
              </Form.Group>
              <Form.Group controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Ninja Age" onChange={this.handleChange} value={this.state.age} />
                <Form.Text className="text-muted"> Age should be greater than 20. </Form.Text>
              </Form.Group>
              <Form.Group controlId="belt">
                <Form.Label>Belt</Form.Label>
                <Form.Control type="text" placeholder="Ninja Belt" onChange={this.handleChange} value={this.state.belt}/>
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
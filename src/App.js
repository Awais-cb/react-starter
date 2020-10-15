import React from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
// Importing Bootstrap from here because UI starts from here
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

// [Container/State component]
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editNinja: false,
      ninjas: [
        { id: 1, name: 'Awais', age: 26, belt: 'black' },
        { id: 2, name: 'Hamza', age: 28, belt: 'blue' },
        { id: 3, name: 'Asim', age: 23, belt: 'green' },
      ],
      mountNinjasFrom: true
    }
  }

  // Functions as Props
  addNinja = (ninja) => {
    ninja.id = Math.floor(Math.random() * 20000);
    // We cannot directly update the state, we would have to assign specific state attribute to a variable (to create a copy of that attribute) manipulate it and then reassign it to state
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    }, () => {
      console.log(this.state.ninjas)
    })
  }

  deleteNinja = (ninjaId) => {
    // We cannot directly manipulate state for deletion either so we need to use non destructive method (which should never alter the state object)
    // This way we can get all elements out of array except one which we want to delete without directly modifying the state
    let ninjas = this.state.ninjas.filter((ninja) => {
      return ninja.id !== ninjaId
    })
    this.setState({
      ninjas: ninjas
    })
  }
  
  editNinja = (ninjaId) => {
    console.log(ninjaId)
    // this.setState({
    //   ninjas: ninjas
    // })
  }

  mountNinjasFrom = () => {
    this.setState({
      mountNinjasFrom: true
    })
  }

  unmountNinjasFrom = () => {
    this.setState({
      mountNinjasFrom: false
    })
  }

  // Component lifecycle hooks
  // componentDidMount fire when component is mounted to the DOM
  componentDidMount = () => {
    console.log('Parent componentDidMount')
  }

  // componentDidUpdate fire when component's state/props are updated
  componentDidUpdate = (prevProps, prevState, snapShot) => {
    console.log('Parent  componentDidUpdate')
    // console.log(prevProps, prevState, snapShot)
  }

  // componentWillUnmount fire when component is take out of DOM 
  componentWillUnmount = () => {
    console.log('Parent componentWillUnmount')
  }

  render() {
    /*
    // Destructuring assignment https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    const { name, age, belt } = this.props
    */
    const { welcomeMessage } = this.props
    return (
      <div className="app">
        <div className="container pt-5">
          {/* Check how react renders on different events */}
          <small>(parent component) {Math.random()}</small>
          <h3 className="text-center mt-2 mb-2">{welcomeMessage}</h3>
          <div className="my-3">
            <Button variant="primary" type="submit" onClick={this.mountNinjasFrom}> Add ninja </Button>
            <Button variant="primary" type="submit" className="ml-2" onClick={this.unmountNinjasFrom}> Unmount form </Button>
          </div>
          {/* Functions as Props */}
          {this.state.mountNinjasFrom ? <AddNinja addNinja={this.addNinja} /> : null}
          <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} editNinja={this.editNinja} />
        </div>
      </div>
    );
  }
}

export default App;

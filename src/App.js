import React from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
// Importing Bootstrap from here because UI starts from here
import 'bootstrap/dist/css/bootstrap.min.css';

// [Container/State component]
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ninjas: [
        { id: 1, name: 'Awais', age: 26, belt: 'black' },
        { id: 2, name: 'Hamza', age: 28, belt: 'blue' },
        { id: 3, name: 'Asim', age: 23, belt: 'green' },
      ]
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
    console.log('Parent ' + ninjaId)
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
          <small>(parent component)</small>
          <h3 className="text-center mt-2 mb-2">{welcomeMessage}</h3>
          {/* Functions as Props */}
          <AddNinja addNinja={this.addNinja} />
          <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        </div>
      </div>
    );
  }
}

export default App;

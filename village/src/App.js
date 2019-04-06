import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';


import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  updateSmurfs = newSmurfs => {
    this.setState({ smurfs: newSmurfs });
  }

  componentDidMount() {
    
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => this.setState({ smurfs: res.data }))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={props => (<Smurfs {...props} smurfs={this.state.smurfs}/> )} />
        <Route path='/smurf-form' render={props => (<SmurfForm {...props} updateSmurfs={this.updateSmurfs} />)}  />
      </div>
    );
  }
}

export default App;

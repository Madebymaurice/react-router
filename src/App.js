import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import History from './History';
import logo from './logo.svg';
import './App.css';
// import Password from './Password.js';
// import Atelier from './Atelier.js';

// class App extends Component {
//
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>React Form Validation Demo</h2>
//         </div>
//         <Password />
//         <Atelier products={PRODUCTS} />
//       </div>
//     )
//   }
// }

// const PRODUCTS = [{
//     name: 'Bruce Banner',
//     alias: 'Hulk',
//     age: 28
// },{
//     name: 'Tony Stark',
//     alias: 'Iron Man',
//     age: 35
// },{
//     name: 'Henry Pym',
//     alias: 'Ant Man',
//     age: 29
// },{
//     name: 'Peter Parker',
//     alias: 'Spiderman',
//     age: 22
// },{
//     name: 'Peter Quill',
//     alias: 'Star Lord',
//     age: 26
// },{
//     name: 'James Howlett',
//     alias: 'Wolverine',
//     age: 33
// },{
//     name: 'Matt Murdok',
//     alias: 'Daredevil',
//     age: 34
// }];

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Form Validation Demo</h2>
        </div>
        <div className="navigation">
          <NavLink exact to="/"> Accueil </NavLink>
          <NavLink to="/notre-histoire"> History </NavLink>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/notre-histoire" component={History} />
        </Switch>
       </div>
    )
  }
}


export default App;

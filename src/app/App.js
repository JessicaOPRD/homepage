// import React, { Component } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from 'app/components/home/Home';
import About from 'app/components/about/About';

import 'app/App.css';

const App = () => (

  <div className="App">

    <Router>

      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>

    </Router>

  </div>
);

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>Hello world!</p>
//       </div>
//     );
//   }
// }

export default App;

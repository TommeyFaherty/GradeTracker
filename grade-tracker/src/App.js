import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar'; 
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Grade Tracker!</h1>
        <Toolbar/>
        <main style={{marginTop:'66px'}}>
        <p>This is the page content!</p>
        </main>
      </div>
    );
  }
}

export default App;

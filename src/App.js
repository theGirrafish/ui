import React, {PureComponent} from 'react';
import logo from './logo.svg';
import me from './nightpic.svg';
import './App.css';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
        <img src={me} alt="me" style={{width: '600px'}}/>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';

//CSS
import './App.css';

import Toolbar from './components/Toolbar/Toolbar';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        dafuq you shouldn't see this!
        <Footer />
      </div>
    );
  }
}

export default App;

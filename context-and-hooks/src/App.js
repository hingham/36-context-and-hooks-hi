import React from 'react';
import Content from './components/content.js';
import SettingsProvider from './components/context.js';

import CountProvider from './components/count-provider.js';
import CountContent from './components/count-consumer.js';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <>
      <p> hello</p>
      <SettingsProvider>
        <Content/>
      </SettingsProvider>
      <CountProvider>
        <CountContent/>
      </CountProvider>
      </>
    );
  }
}

export default App;

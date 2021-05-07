// Topic: Covid19 Tracker

// if not work run => npm install
// and then run => npm start


import React from 'react';
import InfoPanel from './Components/InfoPanel';
import NavBar from './Components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <InfoPanel/>
    </div>
  );
}

export default App;

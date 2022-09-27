import React, { useState } from 'react';
import './App.css';
import Navbar from './components/nav';
import Header from './components/header';

function App() {
  const [content, setContent] = useState(false)
  const showCOntent = () => {
    setContent(true)
  }
  const closeContent = () => {
    setContent(false)
  }
  

  return (
    <div className="App">
      <Navbar />
      {
        content && (
          <div className="content">

            <br />
            <br />
            <Header />
          </div>
        )
      }
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import MyComponents from './components/MyComponents';
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState('Ermanoteu');
  const redTitle = false;

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React CSS</h1>
      {/* component's CSS */}
      <MyComponents />
      <p>This is the paragraph of the App.JS</p>
      {/* inline css */}
      <p style={{ color: 'blue', padding: '25px', borderTop: '2px solid red' }}>
        {/* inline css should be avoided */}
        This element was styled with inline style
      </p>
      {/* dynamic inline css */}
        <h2 style={n < 10 ? {color: 'purple'} : {color: 'darkgray'} }>
          Dynamic Css
        </h2>
        <h2 style={n >= 10 ? {color: 'purple'} : {color: 'darkgray'} }>
          Also Dynamic Css
        </h2>
        <h2 style={name === 'Ermanoteu' ? {color: 'pink'} : {color: null} }>
          One more Dynamic Css
        </h2>
        {/* dynamic class */}
        <h2 className={redTitle ? "red-title" : "title"}>
          This title will have dynamic class
        </h2>
        {/* CSS modules */}
        <Title />
    </div>
  );
}

export default App;

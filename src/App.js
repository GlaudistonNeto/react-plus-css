import './App.css';
import MyComponents from './components/MyComponents';

function App() {
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
    </div>
  );
}

export default App;

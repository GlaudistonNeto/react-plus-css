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
    </div>
  );
}

export default App;

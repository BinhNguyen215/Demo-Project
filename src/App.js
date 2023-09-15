import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React.
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/profile.php?id=100013033413902"
          target="_blank"
          rel="noopener noreferrer"
        >
          facebook
        </a>
      </header>
    </div>
  );
}

export default App;

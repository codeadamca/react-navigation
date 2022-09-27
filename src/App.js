import './App.css';

import {BrowserRouter, Switch, Link} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>React Navigation Sample</h1>
        </header>
        <nav>
          <Link to="/">Home</Link>
          <span> | </span>
          <Link to="/about">About Me</Link>
          <span> | </span>
          <Link to="/contact">Contact</Link>
        </nav>
        <main>
        <Switch>
            <Home exact path="/"></Home>
            <About exact path="/about"></About>
            <Contact exact path="/contact"></Contact>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

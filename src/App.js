import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home.js';
import CreatePosts from './pages/CreatePosts';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/createposts"> Create A Posts </Link>
        <Link to="/"> Home </Link>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createposts" exact component={CreatePosts}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

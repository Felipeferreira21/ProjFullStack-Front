import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home.js';
import CreatePosts from './pages/CreatePosts';
import Post from './pages/Post';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='navbar'>
          <Link to="/createposts"> Create A Posts </Link>
          <Link to="/"> Home </Link>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createposts" exact component={CreatePosts} />
          <Route path="/post/:id" exact component={Post} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

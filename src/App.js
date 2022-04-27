import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import Create from './components/Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    // All components inside the Router tag will be having access to the router
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* Switch tag ensure one route will be showing in one time
          Navbar will be remained due to outside of Switch tag
          Only components inside the Switch tag will be invoked */}
          <Switch>
            {/* Without exact property in Route tag, the route will check whether the path is included in any of the path
            E.g. when the path is "/create", it will still redirect to Home page because "/" exists in "/create".
            That's why we add exact property to make sure it matches full path */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

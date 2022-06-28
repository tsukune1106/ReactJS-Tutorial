import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import Create from './components/Create';
import BlogDetails from './components/Blog/BlogDetails';

function App() {
  // const title = 'Welcome to the new blog';
  // const likes = 50;
  // const person = { name: 'yoshi', age: 30 };

  // reason of using "className" in html due to class is a reserved keyword in javascript

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
            {/* Without "exact" property in Route tag, the route will check whether the path is included in any of the path
            E.g. when the path is "/create", it will still redirect to Home page because "/" exists in "/create".
            That's why we add "exact" property to make sure it matches full path */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>

            {/* Route Parameters */}
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>

          </Switch>
          {/* <h1>{title}</h1>
          <p>Like {likes} times</p>

          input object will give error
          e.g. {person} will give error since person is an object
          <p>person: {person.name}</p>

          all output will be converted into string
          <p>{[1, 2, 3, 4, 5]}</p> */}
        </div>
      </div>
    </Router>
  );
}

export default App;

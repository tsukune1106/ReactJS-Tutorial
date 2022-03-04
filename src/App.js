import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';

function App() {
  // const title = 'Welcome to the new blog';
  // const likes = 50;
  // const person = { name: 'yoshi', age: 30 };

  // reason of using "className" in html due to class is a reserved keyword in javascript

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />

        {/* <h1>{title}</h1>
        <p>Like {likes} times</p>

        input object will give error
        e.g. {person} will give error since person is an object
        <p>person: {person.name}</p>

        all output will be converted into string
        <p>{[1, 2, 3, 4, 5]}</p> */}
      </div>
    </div>
  );
}

export default App;

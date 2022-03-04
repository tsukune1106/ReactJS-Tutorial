import { useState } from 'react';
import BlogList from '../BlogList';

const Home = () => {
    // this does not change the value in html due to not reactive
    // let name = 'mario';
    // hence, for reactive, we use useState
    // [value, function]
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(30);

    const [blogs, setBlogs] = useState([
        { id: 1, title: "My new website", body: 'lorem ipsum...', author: 'mario' },
        { id: 2, title: "Welcome party!", body: 'lorem ipsum...', author: 'yoshi' },
        { id: 3, title: "Web dev top tips", body: 'lorem ipsum...', author: 'mario' }
    ])

    const handleClick = (e) => {
        console.log('hello, ninjas', e);
        setName('luigi');
        setAge(45);
        // setAge({ name: 'test'});
    }

    const handleClickWithValue = (name, e) => {
        console.log('hello, ' + name + ', ', e);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            {/* with handleClick(), it will invoked when page start but wont invoked when clicking button */}
            <button onClick={handleClick}>Click Me</button>

            {/* to invoke function with parenthesis, wrap the function inside a function */}
            <button onClick={() => handleClickWithValue('mario')}>Click Me Again</button>
            {/* <button onClick={() => {
                handleClickWithValue('yoshi')
            }}>Click Me Again</button> */}

            {/* with button event */}
            {/* <button onClick={(e) => handleClickWithValue('yoshi', e)}>Click Me Again</button> */}

            {/* blogs is being pass into "blogs" as props*/}
            <BlogList blogs={blogs} title="All Blogs!" />
        </div>
    );
};

export default Home;
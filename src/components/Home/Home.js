import { useEffect, useState } from 'react';
import BlogList from '../BlogList';

const Home = () => {
    // this does not change the value in html due to not reactive
    // let name = 'mario';
    // hence, for reactive, we use useState
    // [value, function]
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(30);

    // const [blogs, setBlogs] = useState([
    //     { id: 1, title: "My new website", body: 'lorem ipsum...', author: 'mario' },
    //     { id: 2, title: "Welcome party!", body: 'lorem ipsum...', author: 'yoshi' },
    //     { id: 3, title: "Web dev top tips", body: 'lorem ipsum...', author: 'mario' }
    // ]);

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const handleClick = (e) => {
        console.log('hello, ninjas', e);
        setName('luigi');
        setAge(45);
        // setAge({ name: 'test'});
    }

    const handleClickWithValue = (name, e) => {
        console.log('hello, ' + name + ', ', e);
    }

    /* passing function as a prop into BlogList component */
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    /* this function is invoked each time dom render or state changes that caused dom to render */
    /* is useful when something need to be run every re-render */
    // useEffect(() => {
    //     console.log('use effect ran')
    // });

    /* useEffect dependencies */
    /* an empty array is added to indicate useEffect to only run once which is when the dom is firstly rendered */
    /* is used to if only need to run once when it rendered */
    // useEffect(() => {
    //     console.log('use effect ran')
    // }, []);    

    /* state function is added into array to indicate which state function invoked will also invoked useEffect */
    /* this means that useEffect will only be invoked: */
    /* 1: first time the dom rendered */
    /* 2: state function is invoked if is included into useEffect dependencies (only if the value is changes, such as different value) */
    // useEffect(() => {
    //     console.log('use effect ran');
    //     // console.log(blogs);
    //     console.log(name)
    // }, [name]);

    /* using state function to fetch data */
    useEffect(() => {
        console.log('use effect ran');
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setError(null);
            })
            .catch(err => {
                console.log(err.message);
                setError(err.message)
            })
            .finally(() => setIsPending(false))
    }, []);

    /* ----------------------------- */

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

            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}

            {/* blogs is being pass into "blogs" as props and pass into BlogList component */}
            {/* <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} /> */}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />}

            {/* <button onClick={() => setName('luigi')}>Change name</button>
            <p>{name}</p> */}
        </div>
    );
};

export default Home;
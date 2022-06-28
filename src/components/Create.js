import { useState } from "react";
// The useHistory hook gives you access to the history instance that you may use to navigate.
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        // to prevent page refreshed after submit
        e.preventDefault();

        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        }).then((response) => {
            console.log('new blog added:', response);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            setIsPending(false);

            // history.go(-1) redirects the user back to 1 previous route (from history)
            // history.go(1) redirects the user go forward 1 next route (from history)
            // E.g., history.go(-1);

            // if want to navigate to specific route, use history.push();
            // e.g. history.push('/') will redirected the user to Home page which route is '/'
            history.push('/');
        }).catch(error => {
            console.log('add new blog error:', error);
        });
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                {/* without onChange, the value is unable to change */}
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}></input>

                <label>Blog body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>

                <label>Blog author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>

                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}

export default Create;
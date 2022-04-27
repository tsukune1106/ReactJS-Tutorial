import { Link } from "react-router-dom";

// const BlogList = (props) => {
const BlogList = ({ blogs, title, handleDelete }) => { // this is a way of destructuring the object, so don't have to initialize again
    // const blogs = props.blogs,
    //     title = props.title;

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(blog => (
                // key is used to distinguish every item, and it must be unique
                // key only make sense in the context of the surrounding array.
                <div className="blog-preview" key={blog.id}>
                    {/* Link tag with route parameters */}
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;
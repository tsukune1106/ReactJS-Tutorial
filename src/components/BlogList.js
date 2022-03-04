// const BlogList = (props) => {
const BlogList = ({ blogs, title }) => { // this is a way of destructuring the object, so don't have to initialize again
    // const blogs = props.blogs,
    //     title = props.title;

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(blog => (
                // key is used to distinguish every item, and it must be unique
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;
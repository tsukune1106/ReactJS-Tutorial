import { useParams } from "react-router-dom";

const BlogDetails = () => {
    // to get route parameters
    const { id } = useParams();

    return (
        <div className='blog-details'>
            <h2>Blog Details - {id}</h2>
        </div>
    );
}

export default BlogDetails;
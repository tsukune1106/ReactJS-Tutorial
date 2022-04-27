import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                {/* <a href="/">Home</a>
                <a href="/create">New Blog</a> */}

                {/* Link is used to prevent the webpage to refresh or prevent fresh request */}
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>

                {/* dynamic style */}
                {/* <a href="/create" sytle={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</a> */}
            </div>
        </nav>
    );
}

export default Navbar;
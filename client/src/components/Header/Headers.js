const Header = () => {
    return (
        <nav className="navigation">
            {/* eslint-disable-next-line */}
            <ul className="nav-bar" role={"list"}>
                <img className="nav-item-logo" src="./favicon.jpg" alt="logo" />
                <li className="nav-item"><a href="/">Catalog news</a></li>
                <li className="nav-item"><a href="/">IT Jobs</a></li>
                <li className="nav-item"><a href="/">About us</a></li>
                <li className="nav-item"><a href="/">Contact us</a></li>
                <li className="nav-item"><a href="/">Coming soon</a></li>
                <div className="search-bar">
                    <input type="text" placeholder="Search.." />
                    <button className="search-btn">
                        <i className="fas fa-search" />
                        Search
                    </button>
                </div>
            </ul>
        </nav>
    );
};
export default Header;
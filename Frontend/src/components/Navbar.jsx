import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const onLogout = () => {
    sessionStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        
        {/* Brand Name */}
        <Link className="navbar-brand" to="/todo-item-list">
          FLAVOUR PALETTE
        </Link>

        {/* Search Form
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form> */}

        {/* Navbar Toggler for Small Screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links and Dropdown */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav ms-right">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                All Products
              </Link>
            </li>
            <li className="nav-item">
                  <Link to="/orders" className="nav-link">
                    All Orders
                  </Link>
                </li>
            <li className="nav-item">
                  <Link to="/profile" className="nav-link">
                    View Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <button onClick={onLogout} className="nav-link">
                    Logout
                  </button>
                </li>
            {/* <li className="nav-item">
              <Link to="/add-item" className="nav-link">
                Add Item
              </Link>
            </li> */}

            {/* Profile Dropdown Menu */}
            {/* <li className="nav-item dropdown"> */}
              {/* <button
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Profile
              </button> */}
              {/* <ul className="dropdown-menu dropdown-menu-end bg-dark"> Dropdown aligned to right */}
                {/* <li>
                  <Link to="/profile" className="dropdown-item text-white">
                    View Profile
                  </Link>
                </li> */}
                {/* <li>
                  <Link to="/change-password" className="dropdown-item text-white">
                    Change Password
                  </Link>
                </li> */}
                {/* <li>
                  <button onClick={onLogout} className="dropdown-item text-white">
                    Logout
                  </button>
                </li> */}
              {/* </ul> */}
            {/* </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

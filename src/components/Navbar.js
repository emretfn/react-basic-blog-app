import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("homepage");

  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <h1>
          <Link to="/" onClick={() => setActive("homepage")} className="logo">
            Brand
          </Link>
        </h1>
        <ul>
          <li className="navbar-item">
            <Link
              onClick={() => setActive("homepage")}
              className="navbar-links"
              to="/"
            >
              Homepage
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              onClick={() => setActive("blogs")}
              className="navbar-links"
              to="/blogs"
            >
              Blogs
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              onClick={() => setActive("about")}
              className="navbar-links"
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
export default Navbar;

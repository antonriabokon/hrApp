import { Link } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>HR application</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/add">Add Employee</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
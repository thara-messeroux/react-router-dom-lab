// Import Link so we can navigate between pages without reloading
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        {/* Link to Home page */}
        <li>
          <Link to="/">Home</Link>
        </li>

        {/* Link to Mailbox list page */}
        <li>
          <Link to="/mailboxes">Mailboxes</Link>
        </li>

        {/* Link to create new mailbox */}
        <li>
          <Link to="/new-mailbox">New Mailbox</Link>
        </li>
        {/* Link to create new letter */}
        <li>
          <Link to="/new-letter">New Letter</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

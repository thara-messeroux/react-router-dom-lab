// Import Link so each mailbox can open its details page
import { Link } from "react-router-dom";

const MailboxList = (props) => {
  return (
    <main>
      {/* Page title */}
      <h1>Mailbox List</h1>

      {/* Loop through all mailbox objects from state */}
      {props.mailboxes.map((mailbox) => (
        <Link
          key={mailbox._id}
          to={`/mailboxes/${mailbox._id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="mail-box">
            {/* Show the mailbox number */}
            <h2>Mailbox {mailbox._id}</h2>
          </div>
        </Link>
      ))}
    </main>
  );
};

export default MailboxList;

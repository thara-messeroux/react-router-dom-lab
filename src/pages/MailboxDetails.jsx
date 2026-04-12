// Import useParams to read the ID from the URL
import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  // Extract mailboxId from the URL (ex: /mailboxes/2 → "2")
  const { mailboxId } = useParams();

  // Find the mailbox that matches this ID
  const selectedMailbox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId),
  );

  // If mailbox not found, show message
  if (!selectedMailbox) {
    return <h1>Mailbox Not Found</h1>;
  }

  return (
    <main>
      {/* Show mailbox title */}
      <h1>Mailbox {selectedMailbox._id}</h1>

      {/* Show mailbox details */}
      <p>Owner: {selectedMailbox.boxOwner}</p>
      <p>Size: {selectedMailbox.boxSize}</p>
    </main>
  );
};

export default MailboxDetails;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LetterForm = (props) => {
  // navigate lets us redirect after submit
  const navigate = useNavigate();

  // store form data
  const [formData, setFormData] = useState({
    mailboxId: "",
    recipient: "",
    message: "",
  });

  // update form when user types/selects
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // when form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();

    // send data to App.jsx
    props.addLetter(formData);

    // redirect to mailbox details page
    navigate(`/mailboxes/${formData.mailboxId}`);
  };

  return (
    <main>
      <h1>New Letter</h1>

      <form onSubmit={handleSubmit}>
        {/* Mailbox select */}
        <label>Select Mailbox:</label>
        <select
          name="mailboxId"
          value={formData.mailboxId}
          onChange={handleChange}
        >
          <option value="">--Choose a mailbox--</option>

          {/* create dropdown options from real mailboxes */}
          {props.mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              Mailbox {mailbox._id}
            </option>
          ))}
        </select>

        {/* Recipient input */}
        <label>Recipient:</label>
        <input
          type="text"
          name="recipient"
          value={formData.recipient}
          onChange={handleChange}
        />

        {/* Message textarea */}
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Send Letter</button>
      </form>
    </main>
  );
};

export default LetterForm;

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NewMailbox = (props) => {
  // Get navigate function to redirect after form submission
  const navigate = useNavigate();

  // Store form input values
  const [formData, setFormData] = useState({
    boxOwner: "",
    boxSize: "Small",
  });

  // Update form when user types or selects
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // When user submits form
  const handleSubmit = (event) => {
    event.preventDefault(); // prevents page reload

    // Call addBox from App.jsx
    props.addBox(formData);

    // Reset form after submit
    setFormData({
      boxOwner: "",
      boxSize: "Small",
    });

    // Redirect user to Mailboxes page
    navigate("/mailboxes");
  };

  return (
    <main>
      <h1>New Mailbox</h1>

      <form onSubmit={handleSubmit}>
        {/* Owner input */}
        <label>Enter a Boxholder:</label>
        <input
          type="text"
          name="boxOwner"
          value={formData.boxOwner}
          onChange={handleChange}
        />

        {/* Size select */}
        <label>Select a Box Size:</label>
        <select name="boxSize" value={formData.boxSize} onChange={handleChange}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default NewMailbox;

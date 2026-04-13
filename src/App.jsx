// Import React state
import { useState } from "react";

// Import routing tools
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import MailboxList from "./pages/MailboxList";
import MailboxDetails from "./pages/MailboxDetails";
import NewMailbox from "./pages/NewMailbox";

function App() {
  // mailboxes = list of mailbox objects (this is our app's data)
  const [mailboxes, setMailboxes] = useState([]);

  // Function to add a new mailbox
  const addBox = (newBoxData) => {
    // Create a new mailbox object
    const newMailbox = {
      ...newBoxData, // includes boxOwner and boxSize
      _id: mailboxes.length + 1, // auto-increment id
    };

    // Update state with the new mailbox added
    setMailboxes([...mailboxes, newMailbox]);
  };

  // Store all letters
  const [letters, setLetters] = useState([]);

  // Add a new letter
  const addLetter = (newLetter) => {
    setLetters([...letters, newLetter]);
  };

  return (
    <BrowserRouter>
      {/* NavBar always visible */}
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Pass mailboxes data into MailboxList */}
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />

        {/* Pass addBox function into NewMailbox */}
        <Route path="/new-mailbox" element={<NewMailbox addBox={addBox} />} />

        {/* Pass mailboxes into details page */}
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

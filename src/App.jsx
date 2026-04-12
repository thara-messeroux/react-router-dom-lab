// src/App.jsx

// Import routing tools from react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import all pages we created
import Home from "./pages/Home";
import MailboxList from "./pages/MailboxList";
import MailboxDetails from "./pages/MailboxDetails";
import NewMailbox from "./pages/NewMailbox";

function App() {
  return (
    // BrowserRouter = enables routing in the app (like turning on navigation)
    <BrowserRouter>
      {/* Routes = container that holds all route rules */}
      <Routes>
        
        {/* When user goes to "/" → show Home page */}
        <Route path="/" element={<Home />} />

        {/* When user goes to "/mailboxes" → show list page */}
        <Route path="/mailboxes" element={<MailboxList />} />

        {/* When user goes to "/new-mailbox" → show form page */}
        <Route path="/new-mailbox" element={<NewMailbox />} />

        {/* When user goes to "/mailboxes/ANY_ID" → show details page */}
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

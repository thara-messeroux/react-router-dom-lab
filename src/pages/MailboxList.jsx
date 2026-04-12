// src / pages / MailboxList.jsx;

import React from "react";

const MailboxList = () => {
  // Temporary fake mailbox numbers so we can build the page shape first
  const mailboxIds = [1, 2, 3];

  return (
    <main>
      {/* Page title so users know where they are */}
      <h1>Mailbox List</h1>

      {/* This section holds all mailbox boxes */}
      {mailboxIds.map((mailboxId) => (
        <div key={mailboxId} className="mail-box">
          {/* For now, just show the mailbox number */}
          <h2>Mailbox {mailboxId}</h2>
        </div>
      ))}
    </main>
  );
};

export default MailboxList;

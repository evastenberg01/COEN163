import React, { useState } from "react";
import { FaSave, FaPencilAlt } from "react-icons/fa";
import "../../stylesheets/Account/Tab-Content.css";

const AccountDetails = () => {
  const [username, setUsername] = useState("Dantheman");
  const [email, setEmail] = useState("dantheman@example.com");
  const [isUsernameEditable, setIsUsernameEditable] = useState(false);
  const [isEmailEditable, setIsEmailEditable] = useState(false);

  const handleUsernameEdit = () => {
    setIsUsernameEditable(true);
  };

  const handleUsernameSave = () => {
    setIsUsernameEditable(false);
  };

  const handleEmailEdit = () => {
    setIsEmailEditable(true);
  };

  const handleEmailSave = () => {
    setIsEmailEditable(false);
  };

  return (
    <div className="tab-content">
      <div className="input-container">
        <div className="input-label">
          <label>Username:</label>
        </div>
        <div className="input-field">
          {isUsernameEditable ? (
            <>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <FaSave className="save-icon" onClick={handleUsernameSave} />
            </>
          ) : (
            <>
              <span>{username}</span>
              <FaPencilAlt className="edit-icon" onClick={handleUsernameEdit} />
            </>
          )}
        </div>
      </div>
      <div className="input-container">
        <div className="input-label">
          <label>Email:</label>
        </div>
        <div className="input-field">
          {isEmailEditable ? (
            <>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FaSave className="save-icon" onClick={handleEmailSave} />
            </>
          ) : (
            <>
              <span>{email}</span>
              <FaPencilAlt className="edit-icon" onClick={handleEmailEdit} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;

import { useState } from "react";
import Navbar from "../components/Navbar";
import "../stylesheets/Account/Account-Info.css";
import "../stylesheets/Account/Account-Edit.css";
import avatarMale from "../assets/avatar-male.png";
import avatarFemale from "../assets/avatar-female.png";
import { FaCheckCircle } from "react-icons/fa";
import AccountDetails from "./AccountComps/AccountDetails.jsx"

const Account = () => {
  const [activeTab, setActiveTab] = useState("Account Details");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Navbar />
      <div className="account-container">
        <div className="profile">
          <div className="avatar-container">
            <img src={avatarMale} alt="avatar" className="avatar" />
          </div>
          <div className="username-container">
            <FaCheckCircle className="verified" />
            <h2 className="username">Dantheman</h2>
          </div>
          <div className="socials-container">
            <div className="social-label">Followers</div>
            <div className="social-count">2</div>
            <div className="social-label">Following</div>
            <div className="social-count">4</div>
          </div>
        </div>
        <div className="account-edit">
          <div className="account-tabs">
            <div
              className={`tab ${activeTab === "Account Details" && "selected"}`}
              onClick={() => handleTabClick("Account Details")}
            >
              Account Details
            </div>
            <div
              className={`tab ${activeTab === "Followers" && "selected"}`}
              onClick={() => handleTabClick("Followers")}
            >
              Followers
            </div>
            <div
              className={`tab ${activeTab === "Following" && "selected"}`}
              onClick={() => handleTabClick("Following")}
            >
              Following
            </div>
          </div>
          <div className="tab-content">
            {activeTab === "Account Details" && (
              <div>
                <AccountDetails />
              </div>
            )}
            {activeTab === "Followers" && (
              <div>
                <ul className="follower-list">
                  <li className="follower">
                    <img src={avatarMale} alt="follower avatarMale" className="follower-avatar" />
                    <div className="follower-info">
                      <div className="follower-name">John Doe</div>
                      <div className="follower-handle">@johndoe</div>
                    </div>
                  </li>
                  <li className="follower">
                    <img src={avatarFemale} alt="follower avatarMale" className="follower-avatar" />
                    <div className="follower-info">
                      <div className="follower-name">Jane Smith</div>
                      <div className="follower-handle">@janesmith</div>
                    </div>
                  </li>
                </ul>
              </div>
            )}
            {activeTab === "Following" && (
              <div>
                <ul className="follower-list">
                  <li className="follower">
                    <img src={avatarMale} alt="follower avatarMale" className="follower-avatar" />
                    <div className="follower-info">
                      <div className="follower-name">John Doe</div>
                      <div className="follower-handle">@johndoe</div>
                    </div>
                  </li>
                  <li className="follower">
                    <img src={avatarFemale} alt="follower avatarMale" className="follower-avatar" />
                    <div className="follower-info">
                      <div className="follower-name">Jane Smith</div>
                      <div className="follower-handle">@janesmith</div>
                    </div>
                  </li>
                  <li className="follower">
                    <img src={avatarMale} alt="follower avatarMale" className="follower-avatar" />
                    <div className="follower-info">
                      <div className="follower-name">Johnny Doe</div>
                      <div className="follower-handle">@johndoe</div>
                    </div>
                  </li>
                  <li className="follower">
                    <img src={avatarFemale} alt="follower avatarMale" className="follower-avatar" />
                    <div className="follower-info">
                      <div className="follower-name">Jane Smithy</div>
                      <div className="follower-handle">@janesmith</div>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;

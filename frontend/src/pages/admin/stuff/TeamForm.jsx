import { useState } from "react";

import "./Team.modules.css";
import Cameralogo from "../../../assets/images/cameralogo3.png";

const Team = () => {
  const [gender, setGender] = useState("");
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className="team-page">
      <div className="team-content">
        <main className="main-content">
          <h2>Add Team Member</h2>
          <div className="team-form">
            <div className="upload-logo-section">
              <div className="logo-placeholder">
                <img src={Cameralogo} alt="Logo" className="logo-img" />
              </div>
              <a href="#" className="upload-logo">
                Upload Logo
              </a>
            </div>
            <div className="team-fields">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="form-input"
                    placeholder="Enter First Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="form-input"
                    placeholder="Enter Last Name"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    className="form-input"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    id="phone"
                    className="form-input"
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="position">Position</label>
                  <input
                    type="text"
                    id="position"
                    className="form-input"
                    placeholder="Enter Position"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    className="form-input"
                    value={gender}
                    onChange={handleGenderChange}
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="save-button-container">
              <button className="save-button">Add Now</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Team;

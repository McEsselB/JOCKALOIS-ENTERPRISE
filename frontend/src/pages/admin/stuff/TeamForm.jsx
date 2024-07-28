import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import "./Team.modules.css";
import Cameralogo from "../../../assets/images/cameralogo3.png";
import axios from "axios";

const TeamForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    role: "",
    username: "",
    id: "",
  });
  const [allUsers, setAllUsers] = useState();

  const fetchStuffInfo = async () => {
    await axios
      .get("/api/admin/get-all-users")
      .then((response) => {
        setAllUsers(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted", { formData });
  };

  console.log(allUsers);
  // View the console to see all the users so that u see how the data looks like

  // When the user is searching either by email or email filter through the users array and make him select one.
  // When the user selects on set the form data to what the user selected including the id, email, username and role
  // remove the phone number its not necessary

  const handleAddNewMember = async (event) => {
    event.preventDefault();

    await axios
      .put("/api/admin/stuff/add-member", formData)
      .then(() => {
        toast.success("Member added successfully");
        navigate(0);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchStuffInfo();
  }, []);

  return (
    <main className="main-content mt-0 p-0">
      <form onSubmit={handleSubmit} className="team-form">
        <div className="upload-logo-section">
          <div className="logo-placeholder">
            <img src={Cameralogo} alt="Logo" className="logo-img" />
          </div>
          <a href="#" className="upload-logo">
            User Profile
          </a>
        </div>
        <div className="team-fields">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                value={formData.email}
                onChange={handleChange}
                type="text"
                id="email"
                required
                className="form-input"
                placeholder="Search By Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                value={formData.phone}
                onChange={handleChange}
                type="text"
                id="phone"
                className="form-input"
                placeholder="Enter Phone Number"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">Username</label>
              <input
                onChange={handleChange}
                value={formData.username}
                type="text"
                id="username"
                className="form-input"
                placeholder="Search By Username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Role</label>
              <select
                id="role"
                className="form-input"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Update Role
                </option>
                <option value="ADMIN">Admin</option>
                <option value="CUSTOMER">Customer</option>
              </select>
            </div>
          </div>

          <div className="form-row"></div>
        </div>
        <div className="save-button-container">
          <button
            onClick={handleAddNewMember}
            type="submit"
            className="save-button"
          >
            Add Now
          </button>
        </div>
      </form>
    </main>
  );
};

export default TeamForm;

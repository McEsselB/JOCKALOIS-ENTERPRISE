import { Link } from "react-router-dom";
import "./Team1.modules.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Stuff = () => {
  const [stuffInfo, setStuffInfo] = useState();

  const fetchStuffInfo = async () => {
    await axios
      .get("/api/admin/get-stuff-info", { withCredentials: true })
      .then((res) => {
        setStuffInfo(res.data.data);
      });
  };

  useEffect(() => {
    fetchStuffInfo();
  }, []);

  return (
    <div className="team1-page">
      <div className="team1-content">
        <main className="main-content">
          <div className="header-section">
            <h2>Team</h2>
            <Link to="/team1" className="add-member-button">
              Add New Member
            </Link>
          </div>
          <div className="gap-4 grid sm:grid-cols-2 lg:grid-cols-3">
            {stuffInfo?.map((member, index) => (
              <div
                className="team-card  flex-col justify-center items-center"
                key={index}
              >
                <div className="flex items-center justify-center ">
                  <img
                    src={member.profilePicture}
                    alt={member.name}
                    className="team-card-img "
                  />
                </div>
                <h4 className="truncate">{member.username}</h4>
                <p>{member.role}</p>
                <p className="truncate">{member.email}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Stuff;

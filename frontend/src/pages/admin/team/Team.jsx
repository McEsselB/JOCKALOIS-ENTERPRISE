import { Link } from "react-router-dom";
import "./Team1.modules.css";
import profilePic from "../../../assets/images/profile-pic-placeholder.jpeg"; // Placeholder image

const teamMembers = [
  {
    name: "Jason Price",
    position: "Admin",
    email: "janick_parisian@yahoo.com",
    img: profilePic,
  },
  {
    name: "Jukkoe Sisao",
    position: "CEO",
    email: "sibyl_kozey@gmail.com",
    img: profilePic,
  },
  {
    name: "Harriet King",
    position: "CTO",
    email: "nadia_block@hotmail.com",
    img: profilePic,
  },
  {
    name: "Lenora Benson",
    position: "Lead",
    email: "feil.wallace@kunde.us",
    img: profilePic,
  },
];

const Team1 = () => {
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
          <div className="team-cards">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index}>
                <img
                  src={member.img}
                  alt={member.name}
                  className="team-card-img"
                />
                <h4>{member.name}</h4>
                <p>{member.position}</p>
                <p>{member.email}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Team1;

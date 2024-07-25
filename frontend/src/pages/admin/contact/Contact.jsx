import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Contact1.modules.css";
import axios from "axios";

const Contact1 = () => {
  const [contacts, setContacts] = useState();

  const fetchContactInfo = async () => {
    await axios
      .get("/api/admin/get-stuff-info", { withCredentials: true })
      .then((res) => {
        setContacts(res.data.data);
      });
  };

  useEffect(() => {
    fetchContactInfo();
  }, []);
  return (
    <div className="contact-page2">
      <div className="contact-content2">
        <main className="main-content">
          <div className="header-section">
            <h2>Contact</h2>
            <Link to="/contact1" className="add-contact-button">
              Add New Contact
            </Link>
          </div>
          <div className="gap-4 grid sm:grid-cols-2 lg:grid-cols-3 ">
            {contacts?.map((contact, index) => (
              <div className="contact-card" key={index}>
                <div className="flex items-center justify-center ">
                  <img
                    src={contact.profilePicture}
                    alt={contact.username}
                    className="w-[80px] h-[80px] rounded-full "
                  />
                </div>
                <h4 className="truncate">{contact.username}</h4>
                <p className="truncate">{contact.email}</p>
                <button className="message-button">
                  <i className="fa fa-envelope"></i> Message
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contact1;

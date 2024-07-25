import { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const fetchUserDetails = async () => {
    await axios
      .get("/api/auth/user-info", { withCredentials: true })
      .then((res) => {
        setCurrentUser(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const value = { currentUser, fetchUserDetails };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export default UserContextProvider;

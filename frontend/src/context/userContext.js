import { createContext, useContext, useState } from "react";

export const UserContext = createContext(null);

export default function UserContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);

  const value = { currentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const CurrentUser = () => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("User Context must be used in the User Provider");
  }
  return context;
};

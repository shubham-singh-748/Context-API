import { useState } from "react";
import userContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [User, setUser] = useState(null);
  return (
    // Here "userContext.Provider" is like a box and "user and setUser" are two toys in that box.
    // If your friends(other react components) want to play with these two toys, then come to the box("userContext.Provider") and start play with it.
    // It simpler terms, it is super easy for other components to access "User and setUser" when "userContext.Provider" wraps up above it.

    // For example.....
    // <userContextProvider>
    // <Profile/>
    // </userContextProvider>
    
    // Here for "<Profile/>" component is very easy to access to "User and setUser", cuz of <UserContext.Provider> wrap up.
    <userContext.Provider value={{ User, setUser }}>
      {children}
    </userContext.Provider>
  );
};
export default UserContextProvider;

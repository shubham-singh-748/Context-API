import { useContext } from "react";
import userContext from "../context/UserContext";

const Profile = () => {
  // "useContext" hook access "User" object from "userContext"
  const { User } = useContext(userContext);

  // this line checks if "User" object is null or empty, then displays "Please Login"
  if (!User) return <div>Please Login</div>;
  // if "User" object is not empty then display "Username and Password"
  else
    return (
      <div>
        Welcome "{User.Username}" and your password is "{User.Password}"
      </div>
    );
};
export default Profile;

import { useContext, useState } from "react";
import userContext from "../context/UserContext";

const Login = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  //   the "useContext" hook is used to access "setUser" from the "userContext" context. As we know context that is used to sharing of data without using props.
  const { setUser } = useContext(userContext);

  const handleSubmit = (e) => {
    // using "e.preventDefault()" avoids reloading of page, when click on "submit" button.
    e.preventDefault();
    // it takes the value of "Username and Password" entered in the "Username & Password" fields of the input and puts them into an object.
    // This object passed then through "setUser" function. 
    setUser({ Username, Password });
  };

  return (
    <div className="flex flex-col">
      <input
        type="text"
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
        className="border px-5 mt-4"
      />
      <input
        type="text"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        className="border px-5 mt-4"
      />
      <button
        onClick={handleSubmit}
        className="border mt-5 px-[4%] w-[10px] text-center"
      >
        Submit
      </button>
    </div>
  );
};
export default Login;

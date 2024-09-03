import { useState } from "react";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const LoginHandler = () => {
    setIsLoggedIn(true);
  };

  const LogoutHandler = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={LoginHandler}>Login</button>
      <button onClick={LogoutHandler}>Logout</button>
      <h5>{isLoggedIn ? `User is LoggedIn` : "User is LoggedOut"}</h5>
    </div>
  );
};

export default Login;

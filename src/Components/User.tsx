import { useState } from "react";
import { UserProps } from "./Types";

const User = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const LoginHandler = () => {
    setUser({
      name: "hariprasath",
      email: "hari@example.com",
    });
  };

  const LogoutHandler = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={LoginHandler}>Login</button>
      <button onClick={LogoutHandler}>Logout</button>
      <h5>User name is {user?.name}</h5>
      <h5>User email is {user?.email} </h5>
    </div>
  );
};

export default User;

import { GreetProps } from "./Types";

const Greet = ({ name, messageCount, isLoggedIn }: GreetProps) => {
  return (
    <div>
      {isLoggedIn
        ? `Hi ${name}! You have ${messageCount} unread Messages.`
        : `Welcome Guest`}
    </div>
  );
};

export default Greet;

import "./App.css";
import Private from "./Components/Class/Auth/Private";
import Profile from "./Components/Class/Auth/Profile";
// import Counter from "./Components/Class/Counter";
// import Counter from "./Components/UseReducer/Counter";
// import Login from "./Components/Login";
// import User from "./Components/User";
// import Heading from "./Components/Heading";
// import Oscar from "./Components/Oscar";
// import Greet from "./Components/Greet";
// import Person from "./Components/Person";
// import { PersonName } from "./Components/NameList";
// import PersonList from "./Components/PersonList";
// import Status from "./Components/Status";

function App() {
  // const name = {
  //   first: "Lishan",
  //   last: "Ganesan",
  // };
  return (
    <>
      <h4>
        {/* <Greet name={"hariprasath"} messageCount={10} isLoggedIn={false} /> */}
        {/* <Person name={name} /> */}
        {/* <PersonList PersonDetails={PersonName} /> */}
        {/* <Status statuss={"success"} /> */}
        {/* <Heading> PlaceHolder Text</Heading> */}
        {/* <Oscar>
          <Heading>Oscar goes to Lishan</Heading>
        </Oscar> */}
        {/* <Login /> */}
        {/* <User /> */}
        {/* <Counter /> */}
        {/* <Counter message={"The count value is:"} /> */}
        <Private isLoggedIn={true} component={Profile} />
      </h4>
    </>
  );
}

export default App;

import { StatusProps } from "./Types";

const Status = (props: StatusProps) => {
  let message;

  if (props.statuss === "loading") {
    message = "Loading...";
  } else if (props.statuss === "success") {
    message = "Data fetched successfully";
  } else if (props.statuss === "Error") {
    message = "Error in fetching data";
  }

  return <h5>{message}</h5>;
};

export default Status;

import { HeadingProps } from "./Types";

const Heading = (props: HeadingProps) => {
  return <div>{props.children}</div>;
};

export default Heading;

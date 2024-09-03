export type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

export type PersonListProps = {
  PersonDetails: {
    first: string;
    last: string;
  }[];
};

export type StatusProps = {
  statuss: string;
};

export type HeadingProps = {
  children: string;
};

export type OscarProps = {
  children: React.ReactNode;
};

export type UserProps = {
  name: string;
  email: string;
};

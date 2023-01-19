import React from "react";
import { UserContainer } from "./styles";

interface UserProps {
  avatar: string;
  url: string;
  username: string;
}

const User = (props: UserProps) => {
  return (
    <UserContainer>
      <img src={props.avatar} alt="Profile"/>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        {props.username}
      </a>
    </UserContainer>
  );
};

export default User;

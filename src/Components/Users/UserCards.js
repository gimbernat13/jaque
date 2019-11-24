import React from "react";
import { UserCard } from "./UserCard";

export default function UserCards(props) {
  const mappedUsers = props.filteredUsers.map(user => {
    const {
      picture,
      name,
      fathersLastName,
      mothersLastName,
      email,
      roleId,
      active
    } = user; //Destructuring

    return (
      <UserCard
        picture={picture}
        name={name}
        fathersLastName={fathersLastName}
        mothersLastName={mothersLastName}
        email={email}
        roleId={roleId}
        active={active}
        key={email}
      />
    );
  });
  return (
  <div className="container">
  <div className="user-cards">

  </div>
  {mappedUsers}
  </div>);
}

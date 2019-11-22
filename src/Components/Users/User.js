import React from "react";
import { ReactComponent as Points } from "../../assets/svg/points.svg";
import { ReactComponent as ToggleOn } from "../../assets/svg/toggle_on.svg";
import { ReactComponent as ToggleOff } from "../../assets/svg/toggle_off.svg";
import UserRoles from "../../assets/roles.json";

function User(props) {
  const {
    picture,
    name,
    fathersLastName,
    mothersLastName,
    email,
    roleId,
    active
  } = props;



  return (
    <tr className="user-row">
      <td>
        <Points />
      </td>

      <td>
        <img className="user-picture" src={picture} alt="" />
      </td>
      <td>{name}</td>
      <td>{fathersLastName}</td>
      <td>{mothersLastName}</td>
      <td>{email}</td>
      <td>{roleId}</td>
      <td>
        <ToggleOn />
      </td>
    </tr>
  );
}
export default User;

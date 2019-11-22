import React , {Component} from "react";
import { ReactComponent as Points } from "../../assets/svg/points.svg";
import { ReactComponent as ToggleOn } from "../../assets/svg/toggle_on.svg";
import { ReactComponent as Trash } from "../../assets/svg/trash.svg";
import { ReactComponent as Eye } from "../../assets/svg/eye.svg";
import UserModal from "./UserModal";
import Backdrop from "./Backdrop/Backdrop"
import "./UserCard.css"
export class UserCard extends Component {
  state = {
    isShowing: false,
  }
  openModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

render () {
  const {
    picture,
    name,
    fathersLastName,
    mothersLastName,
    email,
    roleId,
    active
  } = this.props;

  
  return (
  
      <div className="user-card shadow">
       
       {this.state.modalOpen ? (
          <div>
            <UserModal openModal={this.openModal}userData={this.props}projectDetails={this.props.projectDetails} />{" "}
            <Backdrop click={this.openModal} />
          </div>
        ) : (
          ""
        )}
        <div className="user-card-inner">
          <div className="user-card-top">
            <div id="top-left-points">
              <Points />
            </div>
            <img className="user-picture-lg" src={picture} alt="" />
            <p>
            <span>{`${name}  ${fathersLastName} ${mothersLastName}  `} </span>

            </p>
            <p className="text-center cut-text">{email}</p>
            <p>{roleId}</p>
            <hr />
          </div>
          <div className="user-card-bottom">
            <ToggleOn style={{marginLeft: "10%"}}/>
            <div className="user-card-buttons">
              <Eye onClick={this.openModal} />
              <Trash />
            </div>
          </div>
        </div>
      </div>
    );
  
} 
 

};

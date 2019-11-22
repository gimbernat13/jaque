import React, { Component } from "react";
import UserTable from "./UserTable";
import UserData from "../../assets/users.json";
import { ReactComponent as ToggleOn } from "../../assets/svg/toggle_on.svg";
import { ReactComponent as Square } from "../../assets/svg/square.svg";
import { ReactComponent as List } from "../../assets/svg/list.svg";
import Backdrop from "../../Ui/Backdrop/Backdrop";
import UsersMain from "./UsersMain";
import UserCards from "./UserCards";
import Modal from "../../Ui/Modal";
import "./Users.css"

function compare(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

class Users extends Component {
  mappedUsers = UserData.users.map(user => {
    return user;
  });

  state = {
    isShowing: false,
    viewMode: "cards",
    searchTerm: "",
    users: this.mappedUsers,
    filteredUsers: this.mappedUsers,
    modalOpen: false
  };







  openModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  handleInputChange = e => {
    this.setState({ searchTerm: e.target.value });
    this.filterUsers(e.target.value);
    // this.setState({filteredUsers: })
  };

  handleViewChange = mode => {
    this.setState({ viewMode: mode });
  };

  sortAscending = () => {
    const filteredUsers = this.state.filteredUsers;
    filteredUsers.sort(compare);
    this.setState({ filteredUsers: filteredUsers });
    console.log(filteredUsers);
  };

  filterUsers = searchTerm => {
    const filteredUsers = this.state.users.filter(user => {
      return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    this.setState({ filteredUsers: filteredUsers });
    console.log(this.state.filteredUsers);
  };
















  render() {
    const checkViewMode = () => {
      if (this.state.viewMode === "cards") {
        return <UserCards filteredUsers={this.state.filteredUsers} />;
      } else {
        return <UserTable filteredUsers={this.state.filteredUsers} />;
      }
    };

    return (
      <div>
        {this.state.modalOpen ? (
          <div>
            <Modal
              openModal={this.openModal}
              projectDetails={this.props.projectDetails}
            />
            <Backdrop click={this.openModal} />
          </div>
        ) : null}
        <UsersMain openModal={this.openModal} />
        <div className="filter-bar">
          <div className="filter-bar-left">
            <input
              onChange={this.handleInputChange}
              className="filter-input search-input"
              type="text"
              placeholder="Búsqueda"
            />
        

            <div className="filter-input" onClick={this.sortAscending}>
              Ordenar Ascendente
            </div>

          </div>
          <div classname="filter-bar-right">
            <span>
         
              <div className="view-mode-icon">
                <List onClick={() => this.handleViewChange("table")} />
              </div>
              <div className="view-mode-icon">
                <Square onClick={() => this.handleViewChange("cards")} />
              </div>
            </span>
          </div>
        </div>
        {checkViewMode()}


      </div>
    );
  }
}

export default Users;

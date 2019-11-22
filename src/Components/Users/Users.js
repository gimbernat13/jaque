import React, { Component } from "react";
import UserTable from "./UserTable";
import UserData from "../../assets/users.json";
import { ReactComponent as Square } from "../../assets/svg/square.svg";
import { ReactComponent as List } from "../../assets/svg/list.svg";
import Backdrop from "../../Ui/Backdrop/Backdrop";
import UsersMain from "./UsersMain";
import UserCards from "./UserCards";
import Modal from "../../Ui/Modal";
import "./Users.css";
import { Pagination } from "./Pagination/Pagination";

function compare(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

function compareNeg(a, b) {
  if (a.name > b.name) {
    return -1;
  }
  if (a.name < b.name) {
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
    modalOpen: false,
    activeCategory: "",
    currentPage: 1,
    usersPerPage: 4,
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
 
  };
  sortDescending = () => {
    const filteredUsers = this.state.filteredUsers;
    filteredUsers.sort(compareNeg);
    this.setState({ filteredUsers: filteredUsers });

  };

  showAll = () => {
    this.setState({ filteredUsers: this.state.users });
  };


  filterUsers = searchTerm => {
    const filteredUsers = this.state.users.filter(user => {
      return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    this.setState({ filteredUsers: filteredUsers });
  };

  includesCategory = category => {
    const filteredByCategory = this.state.users.filter(user => {
      const categoryNum = parseInt(category, 10)
      if (category=== null) {
        console.log("heyo")
      }
      return user.roleId === categoryNum;
    });
    this.setState({ filteredUsers: filteredByCategory });
  };

  handleRoleChange = e => {
    this.includesCategory(e.target.value);
  };


  paginate = pageNumber => {
    const pageNum = parseInt(pageNumber, 10)
 
    this.setState({currentPage:pageNum})
  }


  handleUserCount = e => {
    const userCount = parseInt(e.target.value , 10)
    this.setState({usersPerPage : userCount})
  }














  



  render() {
    const indexOfLastUser = this.state.currentPage * this.state.usersPerPage;
    const indexOfFirstUser = indexOfLastUser - this.state.usersPerPage;
    const currentUsers = this.state.filteredUsers.slice(indexOfFirstUser, indexOfLastUser)
    const checkViewMode = () => {
      if (this.state.viewMode === "cards") {
        return <UserCards filteredUsers={currentUsers} />;
      } else {
        return <UserTable filteredUsers={currentUsers} />;
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


            <form value={this.state.activeCategory} defaultValue="Hey">
              <select
                onChange={this.handleRoleChange}
                className="filter-input"
                value={this.state.activeCategory}
                name=""
                id=""
              >
                <option value={1}>Owner</option>
                <option value={2}>Admin</option>
                <option value={3}>Staff</option>
              </select>
            </form>

            <form value={this.state.usersPerPage}defaultValue="Hey">
              <select
                onChange={this.handleUserCount}
                className="filter-input"
                value={this.state.usersPerPage}
                name=""
                id=""
              >
                <option value={4}>4</option>
                <option value={8}>8</option>
                <option value={16}>16</option>
              </select>
            </form>
     
     
          </div>
          <div className="filter-bar-right">
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

        <Pagination paginate={this.paginate} usersPerPage={this.state.usersPerPage} totalUsers={this.state.filteredUsers.length} />
      </div>
    );
  }
}

export default Users;

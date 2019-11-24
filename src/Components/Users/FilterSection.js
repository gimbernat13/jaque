import React ,{Component}from 'react'
import { ReactComponent as Square } from "../../assets/svg/square.svg";
import { ReactComponent as List } from "../../assets/svg/list.svg";

export class FilterSection extends Component{

  render(){

  
    return (
        <div className="filter-bar">
          <div className="filter-bar-left">
            <input
              onChange={this.handleInputChange}
              className="filter-input search-input"
              type="text"
              placeholder="Búsqueda"
            />

            <form value={this.props.allProps.activeCategory} defaultValue="Hey">
              <select
                onChange={this.handleRoleChange}
                className="filter-input"
                value={this.props.allProps.activeCategory}
                name=""
                id=""
              >
                <option value={1}>Owner</option>
                <option value={2}>Admin</option>
                <option value={3}>Staff</option>
              </select>
            </form>

            <form value={this.props.allProps.usersPerPage} defaultValue="Hey">
              <select
                onChange={this.handleUserCount}
                className="filter-input"
                value={this.props.allProps.usersPerPage}
                name=""
                id=""
              >
                <option value={4}>4</option>
                <option value={8}>8</option>
                <option value={16}>16</option>
              </select>
            </form>
            <div onClick={this.sortAscending} className="filter-input">
              Sort ascending
            </div>
            <div onClick={this.sortDescending} className="filter-input">
              Sort Descending
            </div>
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
       

    )
  }
}

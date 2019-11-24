import React, { Component } from "react";
import "./Modal.css";

// import ProjectSlider from "../Slider/ProjectSlider";
export default class Modal extends Component {
  state = {
    isOpen: false,
    userData: {
      name: "",
      fathersLastName: "",
      mothersLastName: "",
      roleId: "",
      email: ""
    }
  };

  handleChange = (e) => {
    const value = e.target.value;
    console.log(this.state.userData.name)
    const pitonegro = e.target.name
    
  
    // this.setState({
    //   ...this.state.userData,
    //   [e.target.name]: value

      this.setState(prevState => ({
        userData: {                   // object that we want to update
            ...prevState.userData,    // keep all other key-value pairs
            [pitonegro]: value       // update the value of specific key
        }
    }))

    // });



    console.log(this.state.userData)

   
   

  }

  submitForm = () => {
    console.log(this.state.userData)
    console.log("Clicked submit Form")
    this.props.submitForm(this.state.userData); 


  }

  
  render() {
    return (
      <div className="Modal container ">
        <div className="modal-top">
          <h3>Agregar Nuevo Usuario</h3>
          <div className="modal-picture-section">
            <div>
              <h5>Foto de perfil</h5>
              <img className="user-picture-lg" src="" alt="Imágen" />
            </div>
            <div>
              <p>JPG, PNG | Tamaño mínimo de 300px x 300px </p>
              <div className="button">Subir Foto</div>
            </div>
          </div>
          <div className="modal-information-section">
            <h3>Información básica</h3>
            <form className="modal-form" action="">
              <label>
                <input
                  className="filter-input"
                  type="text"
                  name="name"
                  value={this.state.userData.name}
                  placeholder="Nombre"
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <input
                  className="filter-input"
                  type="text"
                  name="fathersLastName"
                  value={this.state.userData.fathersLastName}
                  placeholder="Apellido Paterno"
                  onChange={this.handleChange}
                />
              </label>{" "}
              <label>
                <input
                  className="filter-input"
                  type="text"
                  name="mothersLastName"
                  value={this.state.userData.mothersLastName}
                  placeholder="Apellido Materno"
                  onChange={this.handleChange}
                />
              </label>{" "}
              <label>
                <input
                  className="filter-input"
                  type="text"
                  name="email"
                  value={this.state.userData.email}
                  placeholder="E-mail"
                  onChange={this.handleChange}
                />
              </label>
              <select className="filter-input" type="text" placeholder="Rol">
                <option value="">Admin</option>
                <option value="">Dueño</option>
                <option value="">Staff</option>
              </select>
            </form>
          </div>
        </div>
        <div className="modal-bottom">
          <div onClick={this.props.openModal} className="button">
            Cancelar
          </div>
          <div onClick={this.submitForm} className="button">
            Enviar
          </div>
        </div>
      </div>
    );
  }
}

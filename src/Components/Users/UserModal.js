import React, { Component } from "react";
// import "./Modal.css";
// import Backdrp from "./Backdrop/Backdrop";
// import ProjectSlider from "../Slider/ProjectSlider";
export default class UserModal extends Component {
  state = {
    isOpen: false
  };
  render() {
    const {
        picture,
        name,
        fathersLastName,
        mothersLastName,
        email,
        roleId,
        active
      } = this.props.userData;
   
    return (
      <div className="Modal container ">
        <div className="modal-top">


        <h3>Agregar Nuevo Usuario</h3>
        <div className="modal-picture-section">
          <div>
            <h5>Foto de perfil</h5>
            <img
              className="user-picture-lg"
              src={picture}
              alt=""
            />
          </div>
          <div>
              <p>JPG, PNG | Tamaño mínimo de 300px x 300px </p>
              <div className="button">Subir Foto</div>
          </div>
        </div>
        <div className="modal-information-section">
            <h3>Información básica</h3>
            <form className="modal-form" action="">
                <input className="filter-input" type="text" value={name} placeholder="Nombre"/>
                <input className="filter-input" type="text" value={fathersLastName} placeholder="Apellido Paterno"/>
                <input className="filter-input" type="text" value={mothersLastName} placeholder="Apellido Materno"/>
                <input className="filter-input" type="text" value={email} placeholder="Correo Electrónico"/>
                <select className="filter-input" type="text" value={roleId} placeholder="Rol"> 
                    <option value="">Admin</option>
                    <option value="">Dueño</option>
                    <option value="">Staff</option>
                </select>

            </form>
        </div>
   


        </div>
        <div className="modal-bottom">
        <div onClick={this.props.openModal} className="button">Cancelar</div>
        <div onClick={this.props.openModal} className="button">Enviar</div>
        </div>
      </div>
    );
  }
}

import React from "react";
import { Button } from "semantic-ui-react";
import { User } from "../../api";
import { defaultUser } from "../../assets";
import "./Profile.scss";

const user = new User();

export function Profile() {
  const userData = user.getMe();

  const { displayName, email, photoURL } = userData;

  return (
    <div className="profile">
      <h1>Configuracion</h1>

      <div className="profile__block">
        <div>
          <p>{photoURL || defaultUser}</p>
          <span>{displayName || "Sin nombre"}</span>
        </div>
        <Button primary onClick={() => console.log("Cambiar displayName")}>
          Actualizar Nombre
        </Button>
      </div>

      <div className="profile__block">
        <div>
          <span>Email: {email}</span>
        </div>
        <Button primary onClick={() => console.log("Cambiar Email")}>
          Actualizar Email
        </Button>
      </div>

      <div className="profile__block">
        <div>
          <span>Contraseña</span>
        </div>
        <Button primary onClick={() => console.log("Cambiar Email")}>
          Actualizar Contraseña
        </Button>
      </div>
    </div>
  );
}

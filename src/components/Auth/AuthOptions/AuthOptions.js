import React from "react";
import { Button } from "semantic-ui-react";

import "./AuthOptions.scss";

export function AuthOptions(props) {
  const { openLoginForm, openRegisterForm } = props;

  return (
    <div className="auth-options">
      <h1>Millones de canciones, gratis en Musicfy</h1>
      <Button className="register" onClick={openRegisterForm}>
        Registrate gratis
      </Button>
      <Button className="login" onClick={openLoginForm}>
        Iniciar sesion
      </Button>
    </div>
  );
}

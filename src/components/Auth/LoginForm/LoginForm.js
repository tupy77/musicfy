import React, { useState } from "react";
import { Form, Icon } from "semantic-ui-react";
import "./LoginForm.scss";

export function LoginForm(props) {
  const { openRegisterForm, goBack } = props;

  const [showPassword, setShowPassword] = useState(false);

  const onShowHidePassword = () => setShowPassword(!showPassword);

  return (
    <div className="login-form">
      <h1>Música para todos</h1>

      <Form className="login-form__form">
        <Form.Input
          type="text"
          placeholder="Correo electrónico"
          icon={<Icon name="mail outline" />}
        />
        <Form.Input
          type={showPassword ? "text" : "password"}
          placeholder="Contraseña"
          icon={
            <Icon
              name={showPassword ? "eye slash" : "eye"}
              link
              onClick={onShowHidePassword}
            />
          }
        />

        <Form.Button type="submit" primary fluid>
          Iniciar sesión
        </Form.Button>
      </Form>

      <div className="login-form__options">
        <p onClick={goBack}>Volver</p>
        <p>
          ¿No tienes cuenta? <span onClick={openRegisterForm}>Regístrate</span>
        </p>
      </div>
    </div>
  );
}

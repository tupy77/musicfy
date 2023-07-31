import React from "react";
import { Button } from "semantic-ui-react";

export function AuthOptions(props) {
  const { openLoginForm, openRegisterForm } = props;

  return (
    <div>
      <h1>AuthOptions</h1>
      <Button primary onClick={openRegisterForm}>
        Registro
      </Button>
      <Button primary onClick={openLoginForm}>
        Login
      </Button>
    </div>
  );
}

import React from "react";
import { Button } from "semantic-ui-react";

export function RegisterForm(props) {
  const { openRegisterForm, goBack } = props;
  return (
    <div style={{ backgroundColor: "#f00" }}>
      <h1>RegisterForm</h1>

      <Button primary onClick={openRegisterForm}>
        Sign up
      </Button>
      <Button secondary onClick={goBack}>
        Back
      </Button>
    </div>
  );
}

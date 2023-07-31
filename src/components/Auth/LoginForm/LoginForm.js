import React from "react";
import { Button } from "semantic-ui-react";

export function LoginForm(props) {
  const { openLoginForm, goBack } = props;
  return (
    <div style={{ backgroundColor: "#f0f" }}>
      <h1>LoginForm</h1>

      <Button primary onClick={openLoginForm}>
        Log in
      </Button>
      <Button secondary onClick={goBack}>
        Back
      </Button>
    </div>
  );
}

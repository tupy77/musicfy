import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { AuthOptions, LoginForm, RegisterForm } from "../../components";
import "./Auth.scss";

export function Auth() {
  const [typeForm, setTypeForm] = useState(null);

  const openLoginForm = () => setTypeForm("login");
  const openRegisterForm = () => setTypeForm("register");
  const goBack = () => setTypeForm(null);

  const renderForm = () => {
    if (typeForm === "login") {
      return (
        <LoginForm
          setTypeForm={setTypeForm}
          openLoginForm={openLoginForm}
          goBack={goBack}
        />
      );
    }

    if (typeForm === "register") {
      return (
        <RegisterForm
          setTypeForm={setTypeForm}
          openRegisterForm={openRegisterForm}
          goBack={goBack}
        />
      );
    }
    return (
      <AuthOptions
        openLoginForm={openLoginForm}
        openRegisterForm={openRegisterForm}
      />
    );
  };

  return (
    <div>
      <h1>Auth page</h1>
      <Button primary>Auth Screen</Button>
      {renderForm()}
    </div>
  );
}

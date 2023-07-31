import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import { AuthOptions, LoginForm, RegisterForm } from "../../components";

import { logoWhite } from "../../assets";
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
          openRegisterForm={openRegisterForm}
          goBack={goBack}
        />
      );
    }

    if (typeForm === "register") {
      return (
        <RegisterForm
          setTypeForm={setTypeForm}
          openLoginForm={openLoginForm}
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
    <div className="auth">
      <div className="auth__content">
        {/* IMAGE */}
        <Image
          src={logoWhite}
          alt="Musicfy"
          className="auth__content-logo"
          style={{ width: "100%" }}
        />

        {renderForm()}
      </div>
    </div>
  );
}

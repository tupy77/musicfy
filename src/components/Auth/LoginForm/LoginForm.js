import React, { useState } from "react";
import { Form, Icon } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Auth } from "../../../api";
import "./LoginForm.scss";

const auth = new Auth();

export function LoginForm(props) {
  const { openRegisterForm, goBack } = props;

  const [showPassword, setShowPassword] = useState(false);

  const onShowHidePassword = () => setShowPassword(!showPassword);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    // validateOnChange: false,
    onSubmit: async (formData) => {
      try {
        await auth.login(formData.email, formData.password);
      } catch (error) {
        if (error.code === "auth/user-not-found") {
          formik.setErrors({
            email: "EL USUARIO NO EXISTE",
            password: true,
          });
        }

        if (error.code === "auth/wrong-password") {
          formik.setErrors({
            password: "LA CONTRASEÑA ES INCORRECTA",
          });
        } else {
          console.log(error);
        }
      }
    },
  });

  return (
    <div className="login-form">
      <h1>Música para todos</h1>

      <Form className="login-form__form" onSubmit={formik.handleSubmit}>
        <Form.Input
          name="email"
          type="text"
          placeholder="Correo electrónico"
          icon={<Icon name="mail outline" />}
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
        />
        <Form.Input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Contraseña"
          icon={
            <Icon
              name={showPassword ? "eye slash" : "eye"}
              link
              onClick={onShowHidePassword}
            />
          }
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.errors.password}
        />

        <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
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

function initialValues() {
  return {
    email: "",
    password: "",
  };
}

function validationSchema() {
  return Yup.object({
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  });
}

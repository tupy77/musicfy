import React, { useState } from "react";
import { Form, Icon } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Auth } from "../../../api";

import "./RegisterForm.scss";

const auth = new Auth();

export function RegisterForm(props) {
  const { openLoginForm, goBack } = props;

  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    // validateOnChange: false,

    // validate: (values) => validateForm(values),
    onSubmit: (formData) => {
      try {
        auth.register(formData.email, formData.password);
        console.log("Usuario registrado");
      } catch (error) {
        console.log(error);
      }
    },
  });

  console.log(formik.errors);

  return (
    <div className="register-form">
      <h1>Empieza a escuchar musica con Musicfy gratis</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Input
          name="email"
          type="text"
          placeholder="Correo electronico"
          icon="mail outline"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email && true}
        />
        <Form.Input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Contraseña"
          icon={
            <Icon
              name={showPassword ? "eye slash outline" : "eye"}
              link
              onClick={() => setShowPassword(!showPassword)}
            />
          }
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.errors.password && true}
        />
        <Form.Input
          name="username"
          type="text"
          placeholder="¿Como deberiamos llamarte?"
          icon="user circle outline"
          onChange={formik.handleChange}
          value={formik.values.username}
          error={formik.errors.username && true}
        />

        <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
          Continuar
        </Form.Button>
      </Form>

      <div className="register-form__options">
        <p onClick={goBack}>Volver</p>
        <p>
          ¿Ya tienes Musicfy? <span onClick={openLoginForm}>Inicia sesion</span>
        </p>
      </div>
    </div>
  );
}

function initialValues() {
  return {
    email: "",
    password: "",
    username: "",
  };
}

function validationSchema() {
  return Yup.object({
    email: Yup.string().email("Email invalido").required("Es obligatorio"),
    password: Yup.string().required(true).min(6),
    username: Yup.string().required(true),
  });
}

// function validateForm(values) {
//   let errors = {};

//   // Validar el email
//   if (!values.email) {
//     errors.email = true;
//   } else if (
//     !/^([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]+).([a-zA-Z]{2,6})$/.test(values.email)
//   ) {
//     errors.email = true;
//   }

//   // Validar el password
//   if (!values.password) {
//     errors.password = true;
//   } else if (values.password.length < 6) {
//     errors.password = true;
//   }

//   // Validar el username
//   if (!values.username) {
//     errors.username = true;
//   }

//   return errors;
// }

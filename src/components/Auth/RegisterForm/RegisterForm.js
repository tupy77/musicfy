import React from "react";
import { Form, Icon } from "semantic-ui-react";
import { useFormik } from "formik";

import "./RegisterForm.scss";

export function RegisterForm(props) {
  const { openLoginForm, goBack } = props;

  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: (formData) => {
      console.log("Enviando formulario", formData);
    },
  });

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
          type="password"
          placeholder="Contraseña"
          icon={
            <Icon
              name="eye"
              link
              onClick={() => console.log("mostrar contraseña")}
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

        <Form.Button type="submit" primary fluid>
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
    email: "", // TIENEN QUE SER EXACTAMENTE IGUALES QUE COMO EL NAME DEL INPUT
    password: "",
    username: "",
  };
}

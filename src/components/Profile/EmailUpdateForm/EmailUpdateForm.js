import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { User } from "../../../api";
import * as Yup from "yup";

const userController = new User();

export function EmailUpdateForm(props) {
  const { onClose } = props;
  const [showPassword, setShowPassword] = useState(false);

  const onShowHidenPassword = () => setShowPassword((prevState) => !prevState);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userController.updateUserEmail(
          formValue.email,
          formValue.password
        );
        onClose();
      } catch (error) {
        if (error.code === "auth/wrong-password") {
          formik.setErrors({
            password: "La contraseña proporcionada no es valida.",
          });
        }
        if (error.code === "auth/email-already-in-use") {
          formik.setErrors({
            email: "El correo electronico ya esta en uso por otra cuenta.",
          });
        } else {
          console.log(error);
        }
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="email"
        placeholder="Nuevo correo electronico"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Form.Input
        name="password"
        type={showPassword ? "text" : "password"}
        placeholder="Contraseña"
        icon={{
          name: showPassword ? "eye slash" : "eye",
          link: true,
          onClick: onShowHidenPassword,
        }}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Form.Button type="submit" fluid primary loading={formik.isSubmitting}>
        Actualizar email
      </Form.Button>
    </Form>
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

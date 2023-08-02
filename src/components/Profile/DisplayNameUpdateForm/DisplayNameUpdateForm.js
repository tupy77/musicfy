import React from "react";
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { User } from "../../../api";
import * as Yup from "yup";

const userController = new User();

export function DisplayNameUpdateForm(props) {
  const { onClose } = props;
  const { displayName } = userController.getMe();

  const formik = useFormik({
    initialValues: initialValues(displayName),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      try {
        await userController.updateNameUser(formData.displayName);
        onClose();
      } catch (error) {
        throw error;
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="displayName"
        placeholder="Nombre y Apellidos"
        value={formik.values.displayName}
        onChange={formik.handleChange}
        error={formik.errors.displayName}
      />
      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        Actualizar
      </Form.Button>
    </Form>
  );
}

function initialValues(name) {
  return {
    displayName: name || "",
  };
}

function validationSchema() {
  return {
    displayName: Yup.string().required(true),
  };
}

import React from "react";
import { Form } from "semantic-ui-react";

export function DisplayNameUpdateForm(props) {
  const { onClose } = props;

  return (
    <Form>
      <Form.Input name="displayName" placeholder="Nombre y Apellidos" />
      <Form.Button type="submit" primary fluid>
        Actualizar
      </Form.Button>
    </Form>
  );
}

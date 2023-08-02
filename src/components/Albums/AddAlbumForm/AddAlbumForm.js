import React from "react";
import { Form, Image } from "semantic-ui-react";
import classNames from "classnames";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./AddAlbumForm.scss";

export function AddAlbumForm(props) {
  const { onClose } = props;

  return (
    <Form className="add-album-form">
      <div className="add-album-form__content">
        <div
          className={classNames("add-album-form__content-image", {
            error: false,
          })}
        >
          <Image src={null} className={classNames({ full: null })} />
        </div>

        <div className="add-album-form__content-inputs">
          <Form.Input name="name" placeholder="nombre del album" />

          <Form.Dropdown
            placeholder="Elige un artista"
            fluid
            search
            selection
            options={[]}
          />
        </div>
      </div>

      <Form.Button type="submit" fluid primary>
        Crear album
      </Form.Button>
    </Form>
  );
}

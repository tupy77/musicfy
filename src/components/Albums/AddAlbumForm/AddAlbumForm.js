import React from "react";
import { Form, Image } from "semantic-ui-react";
import classNames from "classnames";
import * as Yup from "yup";
import { useFormik } from "formik";
import "./AddAlbumForm.scss";

export function AddAlbumForm(props) {
  const { onClose } = props;

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    onSubmit: (formData) => {
      console.log(formData);
    },
  });

  return (
    <Form className="add-album-form" onSubmit={formik.handleSubmit}>
      <div className="add-album-form__content">
        <div
          className={classNames("add-album-form__content-image", {
            error: false,
          })}
        >
          <Image src={null} className={classNames({ full: null })} />
        </div>

        <div className="add-album-form__content-inputs">
          <Form.Input
            name="name"
            placeholder="nombre del album"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.errors.name}
          />

          <Form.Dropdown
            placeholder="Elige un artista"
            fluid
            search
            selection
            options={[]}
          />
        </div>
      </div>

      <Form.Button type="submit" fluid primary loading={formik.isSubmitting}>
        Crear album
      </Form.Button>
    </Form>
  );
}

function initialValues() {
  return {
    image: null,
    name: "",
    artist: "",
  };
}

function validationSchema() {
  return Yup.object({
    image: Yup.string().required(true),
    name: Yup.string().required(true),
    artist: Yup.string().required(true),
  });
}

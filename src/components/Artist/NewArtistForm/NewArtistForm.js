import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Form, Image } from "semantic-ui-react";
//import { toast } from "react-toastify";
import { useFormik } from "formik";
import classNames from "classnames";
import * as Yup from "yup";
import "./NewArtistForm.scss";
import { noImage } from "../../../assets";

export function NewArtistForm(props) {
  const { onClose } = props;
  const [image, setImage] = useState(null);

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    setImage(URL.createObjectURL(file));
    formik.setFieldValue("file", file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      console.log(formData);
    },
  });

  return (
    <>
      <Form className="new-artist-form" onSubmit={formik.handleSubmit}>
        <div
          {...getRootProps()}
          className={classNames("new-artist-form__banner", {
            error: formik.errors.file,
          })}
        >
          <input {...getInputProps()} />
          <Image
            src={image || noImage}
            // className={classNames({ full: image })}
          />
        </div>
        <Form.Input
          name="name"
          placeholder="Nombre del artista"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
          Crear artista
        </Form.Button>
      </Form>
      <br />
      <br />
      <br />
      <Form className="new-artist-form" onSubmit={onClose}>
        <div className="new-artist-form__banner">OTROS FIELDS DE PRUEBA</div>
        <Form.Group>
          <Form.Field width={5}>
            <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
          </Form.Field>
          <Form.Field width={11}>
            <input type="file" />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field>
            <input
              type="text"
              placeholder="Nombre del artista (ES PRUEBA NO RELLENAR)"
            />
          </Form.Field>
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field>
            <input
              type="text"
              placeholder="Descripcion (ES PRUEBA, NO RELLENAR)"
            />
          </Form.Field>
        </Form.Group>
      </Form>
    </>
  );
}

function initialValues() {
  return {
    file: null,
    name: "",
  };
}

function validationSchema() {
  return {
    file: Yup.string().required(true),
    name: Yup.string().required(true),
  };
}

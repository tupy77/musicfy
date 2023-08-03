import React, { useState, useCallback } from "react";
import { Form, Icon } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./AddSongForm.scss";
import classNames from "classnames";

export function AddSongForm() {
  const [songName, setSongName] = useState("");

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      console.log(formData);
    },
  });

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    // console.log(file);
    setSongName(file.name);
    formik.setFieldValue("file", file);
    formik.setFieldValue("name", file.name);
  });

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Form className="add-song-form" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="name"
        placeholder="Nombre de la canción"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.errors.name}
      />
      <Form.Dropdown
        placeholder="Asigna la canción a un álbum"
        fluid
        search
        selection
        options={[]}
      />

      <div
        {...getRootProps()}
        className={classNames("add-song-form__file", {
          error: formik.errors.file,
        })}
      >
        <input {...getInputProps()} />
        <Icon name="cloud upload" />
        <div>
          <p>
            Arrastra tu cacnción o haz click <span>aquí</span>
          </p>
          {songName && <p className="song-name">{songName}</p>}
        </div>
      </div>

      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        Subir canción
      </Form.Button>
    </Form>
  );
}

function initialValues() {
  return {
    name: "",
    album: "",
    file: null,
  };
}

function validationSchema() {
  return {
    name: Yup.string().required(true),
    album: Yup.string().required(true),
    file: Yup.string().required(true),
  };
}

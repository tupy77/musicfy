import React, { useState, useEffect, useCallback } from "react";
import { Form, Icon } from "semantic-ui-react";
import classNames from "classnames";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDropzone } from "react-dropzone";
import { map } from "lodash";
import { Album } from "../../../api";
import "./AddSongForm.scss";

const albumController = new Album();

export function AddSongForm() {
  const [songName, setSongName] = useState("");
  const [albumsOptions, setAlbumsOptions] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await albumController.obtainAll();
        const result = map(response, (item) => ({
          key: item.id,
          value: item.id,
          text: item.name,
        }));
        setAlbumsOptions(result);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue);
    },
  });

  const onDrop = useCallback(async (acceptedFile) => {
    const file = acceptedFile[0];
    setSongName(file.name);
    formik.setFieldValue("file", file);
    formik.setFieldValue("name", file.name);
  });

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Form className="add-song-form" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="name"
        placeholder="Nombre de la cación"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.errors.name}
      />
      <Form.Dropdown
        placeholder="Asigna la canción a un álbum"
        fluid
        search
        selection
        options={albumsOptions}
        value={formik.values.album}
        onChange={(_, data) => formik.setFieldValue("album", data.value)}
        error={formik.errors.album}
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
  return Yup.object({
    name: Yup.string().required(true),
    album: Yup.string().required(true),
    file: Yup.string().required(true),
  });
}

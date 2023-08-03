import React, { useState, useEffect, useCallback } from "react";
import { Form, Image } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import classNames from "classnames";
import { Artist, Album, Storage } from "../../../api";
import { map } from "lodash";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
import { useFormik } from "formik";
import { noImage } from "../../../assets";
import "./AddAlbumForm.scss";

const artistController = new Artist();
const albumController = new Album();
const storageController = new Storage();

export function AddAlbumForm(props) {
  const { onClose } = props;
  const [image, setImage] = useState(null);
  const [artistOptions, setArtistOptions] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await artistController.obtainAll();
        const newData = map(response, (artist) => ({
          key: artist.id,
          value: artist.id,
          text: artist.name,
        }));

        setArtistOptions(newData);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  const onDrop = useCallback(async (acceptedFiles) => {
    // console.log(acceptedFiles);
    const file = acceptedFiles[0];
    // console.log(file);
    setImage(URL.createObjectURL(file));
    formik.setFieldValue("image", file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    onSubmit: async (formValue) => {
      try {
        const { name, image, artist } = formValue;
        const response = await storageController.uploadFile(
          image,
          "album",
          uuidv4()
        );
        const url = await storageController.getUrlFile(
          response.metadata.fullPath
        );
        await albumController.create(name, url, artist);
        onClose();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Form className="add-album-form" onSubmit={formik.handleSubmit}>
      <div className="add-album-form__content">
        <div
          {...getRootProps()}
          className={classNames("add-album-form__content-image", {
            error: formik.errors.image,
          })}
        >
          <input {...getInputProps()} />
          <Image
            src={image || noImage}
            className={classNames({ full: image })}
          />
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
            options={artistOptions}
            value={formik.values.artist}
            onChange={(_, data) => formik.setFieldValue("artist", data.value)}
            error={formik.errors.artist}
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

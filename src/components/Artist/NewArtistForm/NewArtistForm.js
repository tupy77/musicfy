import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Form, Image } from "semantic-ui-react";
import "./NewArtistForm.scss";
import { noImage } from "../../../assets";

export function NewArtistForm(props) {
  const { onClose } = props;
  const [image, setImage] = useState(noImage);

  const onDrop = useCallback(async (acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Form className="new-artist-form" onSubmit={onClose}>
      <div {...getRootProps()} className="new-artist-form__banner">
        <input {...getInputProps()} />
        <Image src={image} className="" />
      </div>
      <Form.Input name="name" label="Nombre del artista" />
      <Form.Button type="submit" primary fluid>
        Crear artista
      </Form.Button>
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
          <input type="text" placeholder="Nombre del artista" />
        </Form.Field>
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Field>
          <input type="text" placeholder="Descripcion" />
        </Form.Field>
      </Form.Group>
    </Form>
  );
}

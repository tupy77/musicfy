import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { AvatarUpdate } from "../../components";
import { BasicModal } from "../../components/Shared";
import { User } from "../../api";
import "./Profile.scss";

const user = new User();

export function Profile() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [contentModal, setContentModal] = useState(null);

  const userData = user.getMe();
  const { displayName, email } = userData;

  const onCloseModal = () => {
    setShowModal(false);
    setContentModal(null);
    setTitleModal("");
  };

  const openForm = (type) => {
    switch (type) {
      case "name":
        setTitleModal("Actualizar Nombre");
        setContentModal(<h2>Formulario para actualizar nombre</h2>);
        setShowModal(true);
        break;
      case "email":
        setTitleModal("Actualizar Email");
        setContentModal(<h2>Formulario para actualizar email</h2>);
        setShowModal(true);
        break;
      case "password":
        setTitleModal("Actualizar Contraseña");
        setContentModal(<h2>Formulario para actualizar contraseña</h2>);
        setShowModal(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="profile">
        <h1>Configuracion</h1>

        <div className="profile__block">
          <div>
            <AvatarUpdate />
            <span>{displayName || "Sin nombre"}</span>
          </div>
          <Button primary onClick={() => openForm("name")}>
            Actualizar Nombre
          </Button>
        </div>

        <div className="profile__block">
          <div>
            <span>Email: {email}</span>
          </div>
          <Button primary onClick={() => openForm("email")}>
            Actualizar Email
          </Button>
        </div>

        <div className="profile__block">
          <div>
            <span>Contraseña</span>
          </div>
          <Button primary onClick={() => openForm("password")}>
            Actualizar Contraseña
          </Button>
        </div>
      </div>

      <BasicModal
        show={showModal}
        onClose={onCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  );
}

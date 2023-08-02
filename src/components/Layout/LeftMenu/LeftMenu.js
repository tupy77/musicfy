import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { BasicModal } from "../../Shared";
import "./LeftMenu.scss";

export function LeftMenu() {
  const { pathname } = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [contentModal, setContentModal] = useState(null);

  const isCurrentPage = (route) => {
    return pathname === route;
  };

  const closeModal = () => {
    setShowModal(false);
    setTitleModal("");
    setContentModal(null);
  };

  const openModal = (title, content) => {
    setTitleModal(title);
    setContentModal(content);
    setShowModal(true);
  };

  return (
    <>
      <div className="left-menu">
        <Menu secondary vertical fluid>
          {/* FORMA 1 LINK */}
          <Link to="/">
            <Menu.Item name="inicio" icon="home" active={pathname === "/"} />
          </Link>
          {/* FORMA 2 LINK */}
          <Menu.Item
            as={Link}
            to="/artists"
            name="Artistas"
            icon="users"
            active={isCurrentPage("/artists")}
          />

          <Link to="/albums">
            <Menu.Item
              name="Albunes"
              icon="window maximize outline"
              active={isCurrentPage("/albums")}
            />
          </Link>
        </Menu>

        <Menu secondary vertical fluid>
          <Menu.Item
            name="Nueva cancion"
            icon="plus"
            link
            onClick={() => openModal("Nueva cancion", <h2>Formulario</h2>)}
          />
          <Menu.Item
            name="Nueva album"
            icon="plus circle"
            link
            onClick={() => openModal("Nuevo album", <h2>Formulario</h2>)}
          />
          <Menu.Item
            name="Nueva artista"
            icon="plus circle"
            link
            onClick={() => openModal("Nuevo artista", <h2>Formulario</h2>)}
          />
        </Menu>
      </div>

      <BasicModal
        show={showModal}
        onClose={closeModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  );
}

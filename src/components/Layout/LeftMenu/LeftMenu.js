import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "./LeftMenu.scss";

export function LeftMenu() {
  const { pathname } = useLocation();

  const isCurrentPage = (route) => {
    return pathname === route;
  };

  return (
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
          onClick={() => console.log("Subir cancion")}
        />
        <Menu.Item
          name="Nueva album"
          icon="plus circle"
          link
          onClick={() => console.log("Subir album")}
        />
        <Menu.Item
          name="Nueva artista"
          icon="plus circle"
          link
          onClick={() => console.log("Subir artista")}
        />
      </Menu>
    </div>
  );
}

import React from "react";
import { LeftMenu, TopBar } from "../../components/Layout";
import "./LoggedLayout.scss";

export function LoggedLayout(props) {
  console.log(props);
  const { children } = props; //Los props son los hijos que se le pasan al componente, en este caso son las rutas

  return (
    <div className="logged-layout">
      <div className="logged-layout__content">
        <div className="logged-layout__left-menu">
          <LeftMenu />
        </div>

        <div className="logged-layout__children-content">
          {/* <p>Main</p> */}
          <div className="logged-layout__top-bar">
            <TopBar />
          </div>

          <div>{children}</div>
        </div>
      </div>

      <div className="logged-layout__footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
}

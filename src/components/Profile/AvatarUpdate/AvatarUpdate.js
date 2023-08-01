import React from "react";
import { Image } from "semantic-ui-react";
import { defaultUser } from "../../../assets";
import "./AvatarUpdate.scss";

export function AvatarUpdate() {
  return (
    <div className="avatar-update">
      <Image src={defaultUser || null} />
    </div>
  );
}

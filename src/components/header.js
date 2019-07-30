import React from "react";

import HeaderMain from "../components/headerMain";
import CardPicture from "../components/card";
import styleHeader from "../estilos/styleHeader";

import red from "@material-ui/core/colors/red";
import amber from "@material-ui/core/colors/amber";
import lightBlue from "@material-ui/core/colors/lightBlue";

export default function Header(props) {
  return (
    <div style={styleHeader.headerBackground}>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <HeaderMain lang={props.lang} changeLanguage={props.change} />

        <div className="container">
          <CardPicture
            color={red[500]}
            title="Tus lugares favoritos"
            description="Define tus lista de lugares favoritos"
          />
          <CardPicture
            color={lightBlue[500]}
            title="Tus lugares favoritos"
            description="Define tus lista de lugares favoritos"
          />
          <CardPicture
            color={amber[500]}
            title="Tus lugares favoritos"
            description="Define tus lista de lugares favoritos"
          />
        </div>
      </div>
    </div>
  );
}

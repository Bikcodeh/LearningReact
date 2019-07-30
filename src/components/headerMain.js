import React from "react";
import Title from "./title";
import Button from "@material-ui/core/Button";

import styleHeaderMain from "../estilos/styleHeaderMain";

export default function HeaderMain(props){
  
  return(
      <div style={ styleHeaderMain.headerMain }>
        <Title />
        <Button variant="contained" color="secondary" onClick={ props.changeLanguage }>
            { props.lang === "es" ? "Crear una cuenta gratuita" : "Create a free account"}
        </Button>
        <img
          src={process.env.PUBLIC_URL + "images/icono01.png"}
          alt="icono bici"
          style={ styleHeaderMain.headerillustration }
        />
      </div>
    );
}

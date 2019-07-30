import React from "react";
import { Card } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import styleCard from "../estilos/styleCard";
import { green100 } from "material-ui/styles/colors";

export default function cardPicture(props) {
  var headerBenefitImageStyle = Object.assign({}, styleCard.headerBenefitImage);
  headerBenefitImageStyle.background = props.color || green100;

  return (
    <Box mb={3}>
      <Card style={styleCard.headerBenefit}>
        <div style={styleCard.contentCard}>
          <div className="row">
            <div style={headerBenefitImageStyle}>
              <img
                src={process.env.PUBLIC_URL + "images/icono01.png"}
                alt="imagen"
                width="100px"
                height="100px"
              />
            </div>
            <div style={styleCard.headerBenefitContent}>
              <h3>{props.title}</h3>
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </Card>
    </Box>
  );
}

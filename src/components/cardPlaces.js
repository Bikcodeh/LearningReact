import React from "react";
import { Card, CardContent, CardMedia, CardHeader } from "@material-ui/core";
import data from "../requests/places";
import Box from "@material-ui/core/Box";

export default function PlacesCards() {
  return data.places.map((place, index) => {
    return (
      <Box key={index} className="col-xs-12 col-sm-3" mr={1} p={0}>
        <Card>
          <CardMedia>
            <img src={process.env.PUBLIC_URL + place.imageUrl} alt="" />
          </CardMedia>
          <CardHeader title={place.title}></CardHeader>
          <CardContent>{place.description}</CardContent>
        </Card>
      </Box>
    );
  });
}

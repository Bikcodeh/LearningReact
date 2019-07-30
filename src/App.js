import React from "react";


import { Card, CardContent, CardMedia, CardHeader } from "@material-ui/core";
import Box from "@material-ui/core/Box";

import "./App.css";

import data from "./requests/places";

import Header from "./components/header";
import styleContainerButtom from "./estilos/styleContainerCardsBottom";
import styleContainerCardsMain from "./estilos/styleContainerMainCards";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: "es"
    };
  }

  changeLang = () => {
    this.setState({
      lang: "en"
    });
  };

  places() {
    return data.places.map((place, index) => {
      return (
        <Box key={index} className="col-xs-12 col-sm-3" mr={1} p={0}>
          <Card>
            <CardMedia>
              <img src={process.env.PUBLIC_URL + place.imageUrl} alt="" />
            </CardMedia>
            <CardHeader>{place.title}</CardHeader>
            <CardContent>{place.description}</CardContent>
          </Card>
        </Box>
      );
    });
  }

  render() {
    return (
      <section>
        <Header lang={ this.state.lang } change={ this.changeLang } />
        <div style={ styleContainerCardsMain.containerCards }>
          <div
            className="row"
            style={ styleContainerButtom.containerBottom }
          >
            {this.places()}
          </div>
        </div>
      </section>
    );
  }
}

export default App;

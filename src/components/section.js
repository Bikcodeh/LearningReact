import React from 'react';

import Header from "../components/header";
import PlacesCard from "../components/cardPlaces";

import styleContainerButtom from "../estilos/styleContainerCardsBottom";
import styleContainerCardsMain from "../estilos/styleContainerMainCards";

export default function Section(props){
    return(
        <section>
        <Header lang={ props.lang } change={ props.change } />
        <div className="row" style={ styleContainerCardsMain.containerCards }>
          <h3 style={ styleContainerCardsMain.containerCardsH3 }>Sitios populares</h3>
          <div
            style={ styleContainerButtom.containerBottom }
          >
           <PlacesCard />
          </div>
        </div>
      </section>
    );
}
import React from "react";
import Button from "@material-ui/core/Button";
import purple from "@material-ui/core/colors/purple";
import red from "@material-ui/core/colors/red";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import Box from "@material-ui/core/Box";

import "./App.css";

/** Como estamos importando el elemento por default, podemos darle un nombre al tag que usaremos para invocarlo */
import Title from "./components/title";

/** cuando importamos un elemento que no es por default, tenemos que importalo con el nombre de el */

/** Para manejar el state debemos agregar un valor por defecto en el constructor */
class App extends React.Component {
  render() {
    return (
      <section>
        <div className="Header-background">
          {/**Para aplicar estilos, primer forma */}
          {/** <div style={{ "width" : "80%", "margin" : "0 auto"} }}></div> */}

          {/** La otra forma es con la palabara reservada className */}
          <div style={{ width: "80%", margin: "0 auto" }}>
            <div className="Header-main">
              <Title />
              {/** onClick es reservado de react */}
              {/** Debemos procurar siempre usar arrow funtions para no corromper el ambito de react de los elementos */}

              <Button variant="contained" color="secondary">
                Crear una cuenta gratuita
              </Button>
              <img
                src={process.env.PUBLIC_URL + "images/icono01.png"}
                alt="icono bici"
                className="Header-illustration"
              />
            </div>
          </div>
        </div>
        <div style={{ background: purple[500], padding: "50px" }}>
          <ul>
            <Box mb={3}>
              <Card className="Header-benefit">
                <CardContent style={{ background: red[400] }}>
                  <img
                    src={process.env.PUBLIC_URL + "images/icono02.png"}
                    alt="imagen"
                    width="100px"
                    height="100px"
                  />
                  <h3>Calificaciones con emociones</h3>
                  <p>Califica tus lugares con experiencias, no con numeros</p>
                </CardContent>
              </Card>
            </Box>
            <Box mb={2}>
              <Card className="Header-benefit">
                <CardContent style={{ background: red[400] }}>
                  <img
                    src={process.env.PUBLIC_URL + "images/icono03.png"}
                    alt="imagen"
                    width="100px"
                    height="100px"
                  />
                  <h3>Sin internet? Sin problemas</h3>
                  <p>Places funciona sin internet o en conexiones lentas</p>
                </CardContent>
              </Card>
            </Box>
            <Box mb={2}>
              <Card className="Header-benefit">
                <CardContent style={{ background: red[400] }}>
                  <img
                    src={process.env.PUBLIC_URL + "images/icono01.png"}
                    alt="imagen"
                    width="100px"
                    height="100px"
                  />
                  <h3>Tus lugares favoritos</h3>
                  <p>Define tus lista de lugares favoritos</p>
                </CardContent>
              </Card>
            </Box>
          </ul>
        </div>
      </section>
    );
  }
}

export default App;

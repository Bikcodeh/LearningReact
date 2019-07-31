import React from "react";

import "./App.css";

import Section from "./components/section";

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

  render() {
    return (
      <Section lang={this.state.lang} change={this.changeLang}/>
    );
  }
}

export default App;

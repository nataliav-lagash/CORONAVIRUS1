import React, { Component } from "react";
import List from "../components/List";
import axios from "axios";
import AppNav from "../components/AppNav";

class PaisListContainer extends Component {
  state = {
    paisData: []
  };
  componentDidMount() {
    axios
      .get("https://coronavirus-19-api.herokuapp.com/countries")
      .then(result => {
        console.log(result);
        const paisData = result.data;

        this.setState({
          paisData
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { paisData } = this.state;
    return (
      <>
        <AppNav />
        <List paisData={paisData} />
      </>
    );
  }
}

export default PaisListContainer;

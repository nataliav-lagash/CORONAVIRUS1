import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import PaisListContainer from "./containers/PaisListContainer";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/listpaises" component={PaisListContainer} />
    </Switch>
  );
};
export default Routes;

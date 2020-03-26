import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

function AppNav(props) {
  const { classes } = props;
  return (
    <AppBar className={classes.NavColor} position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" component="p">
          AppCORONAVIRUS
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles({
  NavColor: {
    backgroundColor: "#FF4500"
  }
})(AppNav);

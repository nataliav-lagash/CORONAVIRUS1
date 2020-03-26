import { makeStyles } from "@material-ui/core/styles";

import coronavirus from "../images/coronavirus.jpg";

const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: 0,
    paddingRight: 0
  },
  grid: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${coronavirus})`,
    [theme.breakpoints.down("md")]: {
      backgroundPosition: "25% 75%"
    },
    [theme.breakpoints.up("lg")]: {
      backgroundPosition: "center"
    }
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 400,
    padding: theme.spacing(8),
    opacity: 0.9
  },
  button: {
    margin: 8
  },
  titulo: {
    textAlign: "center"
  },
  div: {
    backgroundColor: "black",
    border: "3px solid black",
    borderRadius: "10px"
  }
}));

export default useStyles;

import React from "react";

import { Button, Container, Grid, Paper, TextField } from "@material-ui/core";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();

  return (
    <Container className={classes.Container} maxWidth={false}>
      <Grid className={classes.grid}>
        <Paper className={classes.paper}>
          <h1>Coronavirus (COVID-19)</h1>
          <form>
            <TextField
              required
              id="standard-required"
              label="Required"
              defaultValue="COVID-19"
            />
          </form>
          <form>
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </form>

          <form>
            <Button variant="contained" color="primary" onClick>
              INGRESO
            </Button>
          </form>
        </Paper>
      </Grid>
    </Container>
  );
};
export default Home;

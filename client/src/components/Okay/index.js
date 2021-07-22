import React from "react";
import "../../App.css";

import Button from "@material-ui/core/Button";

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 50, 
      fontWeight:"bold"
    },
  },
  palette: {
    primary: {
      main: green[400],
    },
    secondary: {
      main: orange[400],
    },
  },
});

export default function Okay() {
  return (
    <div>
      {" "}
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <div className="App">
            <header className="App-header">
              <AppBar color="secondary">
                <Toolbar>
                  <Typography variant="h6">How Are You Today?</Typography>
                  <Button>Home</Button>
                </Toolbar>
              </AppBar>
              <Typography variant="h2" component="div">
                Okay
              </Typography>
              <Typography variant="subtitle1">
                Tools and Techniques to help Keep you Balanced!
              </Typography>

              <Grid container spacing={4} justify="center">
                <Grid item xs={12} sm={5}>
                <h2>Meditation</h2>
                  <Paper style={{ height: 75, width: "100%" }} >checking</Paper>
                </Grid>
                <Grid item xl={12} sm={3}>
                <h2>Activities</h2>
                  <Paper style={{ height: 75, width: "100%"}} />
                </Grid>
                <Grid item xl={12} sm={3}>
                <h2>Books</h2>
                  <Paper style={{ height: 75, width: "100%" }} />
                </Grid>
              </Grid>
            </header>
          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
}

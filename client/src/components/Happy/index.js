import React, { useState } from "react";
import "../../App.css";
import Auth from '../../utils/auth';
import Books from '../Books';
import { searchGoogleBooks } from '../../utils/Api';
import comingSoon from '../../assets/ComingSoon.png'; 

import { NavLink } from "react-router-dom";

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";

import {
  Button,
  Typography,
  Container,
  Paper,
  Grid,
  AppBar,
  Toolbar,
  Card,
  CardMedia,
  CardContent 
} from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 24,
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

///////////////// WRITE CODE IN UTILS AND IMPORT IT!!!!!!!/////

export default function Happy({ classes }) {
  const mood = 'Happy';

  const [bookSearchComplete, setBookSearchComplete] = useState(false);
  const [bookData, setBookData] = useState([{}]);

  const bookResults = async () => {
    try {
        const bookSearch = await searchGoogleBooks(mood);

        const { items } = await bookSearch.json();
        console.log('items0', items[0])
        const bookArr = [items[0], items[1], items[2]];

        const bookInfo = await bookArr.map((book) => ({
          authors: book.volumeInfo.authors || ['No author displayed'],
          title: book.volumeInfo.title,
          description: book.volumeInfo.description,
          image: book.volumeInfo.imageLinks?.thumbnail || '',
          link: book.volumeInfo.previewLink || ''
      }));

          setBookSearchComplete(true);
          setBookData(bookInfo);
    }
    catch (err) {
        console.log(err);
    }
  };

  bookResults();

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
                    <NavLink to="/">
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes}
                      >
                        Home
                      </Button>
                      <Button
                        onClick={() => {Auth.logout()}}
                        variant="contained"
                        color="primary"
                        className={classes}
                      >
                        Logout
                      </Button>
                    </NavLink>
                </Toolbar>
              </AppBar>
              <Typography variant="h2" component="div">
                Happy
              </Typography>
              <Typography variant="subtitle1">
                Tools and Techniques to Keep you Moving!
              </Typography>

              <Grid container spacing={2} justify="center">
                <Grid item xs={12} sm={4} m={3}>
                <h2>Meditation</h2>
                  <Paper 
                    style={{ height: 800, width: "100%" }}
                  >
                    <Card>
                      <CardMedia
                        style={{ height: 150, width: "100%" }}
                        image={comingSoon}
                        title='Coming Soon'
                      >

                      </CardMedia>
                      <CardContent>
                        <Typography>
                          Feature Coming Soon
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardMedia
                        style={{ height: 150, width: "100%" }}
                        image={comingSoon}
                        title='Coming Soon'
                      >

                      </CardMedia>
                      <CardContent>
                        <Typography>
                          Feature Coming Soon
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardMedia
                        style={{ height: 150, width: "100%" }}
                        image={comingSoon}
                        title='Coming Soon'
                      >

                      </CardMedia>
                      <CardContent>
                        <Typography>
                          Feature Coming Soon
                        </Typography>
                      </CardContent>
                    </Card>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4} m={3}>
                <h2>Activities</h2>
                <Paper 
                    style={{ height: 800, width: "100%" }}
                  >
                    <Card>
                      <CardMedia
                        style={{ height: 150, width: "100%" }}
                        image={comingSoon}
                        title='Coming Soon'
                      >

                      </CardMedia>
                      <CardContent>
                        <Typography>
                          Feature Coming Soon
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardMedia
                        style={{ height: 150, width: "100%" }}
                        image={comingSoon}
                        title='Coming Soon'
                      >

                      </CardMedia>
                      <CardContent>
                        <Typography>
                          Feature Coming Soon
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardMedia
                        style={{ height: 150, width: "100%" }}
                        image={comingSoon}
                        title='Coming Soon'
                      >

                      </CardMedia>
                      <CardContent>
                        <Typography>
                          Feature Coming Soon
                        </Typography>
                      </CardContent>
                    </Card>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4} m={3}>
                <h2>Books</h2>
                  <Paper 
                    style={{ height: 2000, width: "100%" }} 
                  >
                    {!bookSearchComplete 
                      ? ( <> 
                            <Typography>
                              Loading...
                            </Typography>
                            <Typography>
                              Loading...
                            </Typography>
                            <Typography>
                              Loading....
                            </Typography>
                          </>
                        )
                      : (
                          <Books
                            bookData={bookData}
                          ></Books>
                        )
                    }
                    
                  </Paper>
                </Grid>
              </Grid>
            </header>
          </div>
        </Container>
      </ThemeProvider>
      )
    </div>
  );
}

import React, { useState } from "react";
import "../../App.css";
import { NavLink } from "react-router-dom";

import Auth from '../../utils/auth';
import Books from '../Books';
import { searchGoogleBooks } from '../../utils/Api';

import girlBook from '../../assets/Images/girl-2604837_1920.jpg';
import womanStretch from '../../assets/Images/people-2573216_1280.jpg';
import violin from '../../assets/Images/violin-374096_1280.jpg';
import run from '../../assets/Images/run-1749410_1920.jpg';
import meditate from '../../assets/Images/sunset-691848_1280.jpg';
import bicycle from '../../assets/Images/bicycle-384566_1920.jpg';

import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 50, 
      fontWeight:'bold'
    },
  },
  palette: {
    secondary: {
      main: orange[400],
    },
  },
});

export default function Okay({ classes }) {

  const mood = 'Okay';

  const [bookSearchComplete, setBookSearchComplete] = useState(false);
  const [bookData, setBookData] = useState([{}]);

  const bookResults = async () => {
    try {
        const bookSearch = await searchGoogleBooks(mood);

        const { items } = await bookSearch.json();
        
        const bookArr = await items.slice(0, 3);

        const bookInfo = await bookArr.map((book) => ({
          authors: book.volumeInfo.authors || ['No author displayed'],
          title: book.volumeInfo.title,
          description: book.volumeInfo.description,
          image: book.volumeInfo.imageLinks?.thumbnail || '',
          link: book.volumeInfo.previewLink || ''
      }));

        setBookData(bookInfo);  
        setBookSearchComplete(true);
              
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
            <header className="okayDiv">
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
                Okay
              </Typography>
              <Typography variant="subtitle1">
                Tools and Techniques to help Keep you Balanced!
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
                          image={girlBook}
                          title='woman reading a book'
                        >

                        </CardMedia>
                        <CardContent>
                          <Typography>
                          <iframe width="560" height="315" src="https://www.youtube.com/embed/xkEKJV1FSiw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </Typography>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardMedia
                         style={{ height: 150, width: "100%" }}
                         image={meditate}
                         title='sunset meditation'
                                                >
                        </CardMedia>
                        <CardContent>
                          <Typography>
                          <iframe width="560" height="315" src="https://www.youtube.com/embed/86m4RC_ADEY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </Typography>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardMedia
                          style={{ height: 150, width: "100%" }}
                          image={violin}
                          title='violin'
                        >

                        </CardMedia>
                        <CardContent>
                          <Typography>
                          <iframe width="560" height="315" src="https://www.youtube.com/embed/xB3G5-eA7hI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                          image={run}
                          title='runner'
                        >

                        </CardMedia>
                        <CardContent>
                          <Typography>
                          <iframe width="550" height="315" src="https://www.youtube.com/embed/oSQrlzzuTa4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </Typography>
                          
                        </CardContent>
                      </Card>
                      <Card>
                        <CardMedia
                          style={{ height: 150, width: "100%" }}
                          image={womanStretch}
                          title='woman in a yoga stretch'
                        >

                        </CardMedia>
                        <CardContent>
                          <Typography>
                          <iframe width="560" height="315" src="https://www.youtube.com/embed/BPK9WNtpBgk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </Typography>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardMedia
                          style={{ height: 150, width: "100%" }}
                          image={bicycle}
                          title='cyclist'
                        >

                        </CardMedia>
                        <CardContent>
                          <Typography>
                          <iframe width="560" height="315" src="https://www.youtube.com/embed/YCZssRQgddk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    </div>
  );
}

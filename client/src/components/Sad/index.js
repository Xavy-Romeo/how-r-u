import React, { useState } from "react";
import "../../App.css";
import { NavLink } from "react-router-dom";

import Auth from '../../utils/auth';
import Books from '../Books';
import { searchGoogleBooks } from '../../utils/Api';

import comingSoon from '../../assets/ComingSoon.png';
import sad from '../../assets/Images/sad-505857_1280.jpg';
import handMeditate from '../../assets/Images/meditation-1794292_1280.jpg';
import headphones from '../../assets/Images/girl-791686_1280.jpg';
import taiChi from '../../assets/Images/kevin-olson-QXkoms0AnIo.jpg';
import boxing from '../../assets/Images/girl-3253532_1280.jpg';
import hike from '../../assets/Images/adventure-1850178_1280.jpg';

import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { orange } from "@material-ui/core/colors";
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

export default function Sad({ classes }) {

  const mood = 'Sad';

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
            <header className="sadDiv">
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
                Sad
              </Typography>
              <Typography variant="subtitle1">
                Tools and Techniques To Help You Find A New Way!
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
                          image={sad}
                          title='sad bw'
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
                          image={handMeditate}
                          title='hands in lap'
                        >

                        </CardMedia>
                        <CardContent>
                          <Typography>
                          <iframe width="560" height="315" src="https://www.youtube.com/embed/bgs1rqr9UXA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </Typography>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardMedia
                          style={{ height: 150, width: "100%" }}
                          image={headphones}
                          title='woman wearing headphones'
                        >

                        </CardMedia>
                        <CardContent>
                          <Typography>
                          <iframe width="560" height="315" src="https://www.youtube.com/embed/5rjtp2QLphE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                          image={taiChi}
                          title='tai chi couple'
                        >

                        </CardMedia>
                        <CardContent>
                          <Typography>
                          <iframe width="550" height="315" src="https://www.youtube.com/embed/NsZaY-EMpiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                             </Typography>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardMedia
                          style={{ height: 150, width: "100%" }}
                          image={boxing}
                          title='woman boxer'
                        >

                        </CardMedia>
                        <CardContent>
                          <Typography>
                          <iframe width="560" height="315" src="https://www.youtube.com/embed/PoOi81Wwf3M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </Typography>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardMedia
                          style={{ height: 150, width: "100%" }}
                          image={hike}
                          title='hiker on mountain'
                        >

                        </CardMedia>
                        <CardContent>
                          <Typography>
                          <iframe width="560" height="315" src="https://www.youtube.com/embed/ttr2ANenbOo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

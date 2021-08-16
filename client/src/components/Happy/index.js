import React, { useState, useEffect } from "react";

import "../../App.css";
import Books from '../Books';
import { searchGoogleBooks } from '../../utils/Api';
import useStyles from './styles';

import meditationPeace from '../../assets/Images/buddhism-2214532_1280.jpg';
import stones from '../../assets/Images/stones-2040340_1920.jpg';
import happyCouple from '../../assets/Images/couple-1030744_1280.jpg';
import streetMarathon from '../../assets/Images/street-marathon-1149220_1920.jpg';
import yoga from '../../assets/Images/yoga-3053487_1280.jpg';
import chi from '../../assets/Images/fu-3624167_1920.jpg';
import book from '../../assets/Images/book.jpg';

import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const theme = createTheme({
  palette: {
    secondary: {
      main: orange[400],
    },
  },
});

export default function Happy() {
  const classes = useStyles();
  
  const mood = 'Happy';

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

  useEffect(() => bookResults());

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Box className="App">
            <Box className="happyDiv">
              
              <Typography variant="h2" className={classes.sectionTitle}>
                Happy
              </Typography>
              <Typography variant="h5" className={classes.subtitle}>
                Tools and Techniques to Keep you Moving!
              </Typography>

              <Grid container justify="center">
                <Grid item xs={12} sm={4} m={3}>
                  <Typography variant='h3' className={classes.sectionTitle}>
                    Meditation
                  </Typography>
                  <Paper 
                    style={{ height: 800, width: "90%", margin: '0 2.5% 0 7.5%'}}
                  >
                    <Card>
                      <CardMedia
                        style={{ height: 150, width: "100%" }}
                        image={meditationPeace}
                        title='meditation master'
                      />
                      <CardContent>
                        <Typography>
                          <iframe width="100%" height="300px" src="https://www.youtube.com/embed/RqxVzWM8fLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardMedia
                        style={{ height: 150, width: "100%" }}
                        image={stones}
                        title='stones'
                      />
                      <CardContent>
                        <Typography>
                          <iframe width="100%" height="300px" src="https://www.youtube.com/embed/ZVmjNLqUkyI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardMedia
                        style={{ height: 150, width: "100%" }}
                        image={happyCouple}
                        title='happy couple'
                      />
                      <CardContent>
                        <Typography>
                          <iframe width="100%" height="300px" src="https://www.youtube.com/embed/62uqI43b7hc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Typography>
                      </CardContent>
                    </Card>
                  </Paper>
                </Grid>
                
                <Grid item xs={12} sm={4} m={3}>
                  <Typography variant='h3' className={classes.sectionTitle}>
                    Activities
                  </Typography>
                <Paper 
                    style={{ height: 800, width: "90%", margin: '0 5% 0 5%'}}
                  >
                    <Card>
                      <CardMedia
                        style={{ height: 150, width: "100%" }}
                        image={streetMarathon}
                        title=' many bikers in a marathon'
                      />
                      <CardContent>
                        <Typography>
                          <iframe width="100%" height="300px" src="https://www.youtube.com/embed/PHpnPMF_ZCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardMedia
                        style={{ height: 150, width: "100%" }}
                        image={yoga}
                        title='woman doing yoga'
                      />

                      <CardContent>
                        <Typography>
                          <iframe width="100%" height="300px" src="https://www.youtube.com/embed/HlgmHxVXw7g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardMedia
                        style={{ height: 150, width: "100%" }}
                        image={chi}
                        title='sunset chi'
                      />
                      <CardContent>
                        <Typography>
                        <iframe width="100%" height="300px" src="https://www.youtube.com/embed/NsZaY-EMpiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Typography>
                      </CardContent>
                    </Card>
                  </Paper>
                </Grid>
                
                <Grid item xs={12} sm={4} m={3}>
                <Typography variant='h3' className={classes.sectionTitle}>
                    Books
                  </Typography>
                  <Paper 
                    style={{ height: '95%', width: "90%", margin: '0 7.5% 0 2.5%'}} 
                  >
                    <Card>
                      <CardMedia
                        style={{ height: 150, width: "100%" }}
                        image={book}
                        title='book'
                      />
                    </Card>

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
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      )
    </Box>
  );
}

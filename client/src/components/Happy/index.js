import React, { useState } from "react";

import "../../App.css";
import Books from '../Books';
import { searchGoogleBooks } from '../../utils/Api';

import meditationPeace from '../../assets/Images/buddhism-2214532_1280.jpg';
import stones from '../../assets/Images/stones-2040340_1920.jpg';
import happyCouple from '../../assets/Images/couple-1030744_1280.jpg';
import streetMarathon from '../../assets/Images/street-marathon-1149220_1920.jpg';
import yoga from '../../assets/Images/yoga-3053487_1280.jpg';
import chi from '../../assets/Images/fu-3624167_1920.jpg';

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

export default function Happy({ classes }) {
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

  bookResults();

  return (
    <Box>
      {" "}

      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Box className="App">
            <Box className="happyDiv">
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
                        image={meditationPeace}
                        title='meditation master'
                      >
                      </CardMedia>
                      <CardContent>
                        <Typography>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/RqxVzWM8fLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardMedia
                        style={{ height: 150, width: "100%" }}
                        image={stones}
                        title='stones'
                      >

                      </CardMedia>
                      <CardContent>
                        <Typography>
                        <iframe width="550" height="315" src="https://www.youtube.com/embed/ZVmjNLqUkyI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardMedia
                        style={{ height: 150, width: "100%" }}
                        image={happyCouple}
                        title='happy couple'
                      >

                      </CardMedia>
                      <CardContent>
                        <Typography>
                        <iframe width="550" height="315" src="https://www.youtube.com/embed/62uqI43b7hc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                        image={streetMarathon}
                        title=' many bikers in a marathon'
                      >

                      </CardMedia>
                      <CardContent>
                        <Typography>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/PHpnPMF_ZCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardMedia
                        style={{ height: 150, width: "100%" }}
                        image={yoga}
                        title='woman doing yoga'
                      >

                      </CardMedia>
                      <CardContent>
                        <Typography>
                        <iframe width="550" height="315" src="https://www.youtube.com/embed/HlgmHxVXw7g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardMedia
                        style={{ height: 150, width: "100%" }}
                        image={chi}
                        title='sunset chi'
                      >

                      </CardMedia>
                      <CardContent>
                        <Typography>
                        <iframe width="550" height="315" src="https://www.youtube.com/embed/NsZaY-EMpiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      )
    </Box>
  );
}

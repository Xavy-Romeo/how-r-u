import React, { useState } from "react";
import "../../App.css";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import Books from '../Books';
import { searchGoogleBooks } from '../../utils/Api';

import handMeditate from '../../assets/Images/meditation-1794292_1280.jpg';
import meditate from '../../assets/Images/sunset-691848_1280.jpg';
import selfLove from '../../assets/Images/self-love-3969679_1280.jpg';
import beachStretch from '../../assets/Images/beach-1835213_1920.jpg';
import run from '../../assets/Images/run-1749410_1920.jpg';
import taiChi from '../../assets/Images/kevin-olson-QXkoms0AnIo.jpg';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { orange } from "@material-ui/core/colors";

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

export default function Anxious({ classes }) {
  const mood = 'Anxious';

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
            <Box className="anxiousDiv">
              <Typography variant="h2" component="div">
                Anxious
              </Typography>
              <Typography variant="subtitle1">
                Tools and Techniques To Assist on your Path !
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
                          image={handMeditate}
                          title='hands in lap'
                        >

                        </CardMedia>
                        <CardContent>
                          <Typography>
                          <iframe width="400" height="315" src="https://www.youtube.com/embed/O-6f5wQXSu8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                          <iframe width="550" height="315" src="https://www.youtube.com/embed/JLJqUipWRWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </Typography>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardMedia
                          style={{ height: 150, width: "100%" }}
                          image={selfLove}
                          title='self love'
                        >

                        </CardMedia>
                        <CardContent>
                          <Typography>
                          <iframe width="550" height="315" src="https://www.youtube.com/embed/itZMM5gCboo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                          image={beachStretch}
                          title='sunset yoga stretch'
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

    </Box>
  );
}

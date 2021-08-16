import React, { useState, useEffect } from "react";

import Books from '../Books';
import { searchGoogleBooks } from '../../utils/Api';
import useStyles from './styles';
import '../../App.css';

import girlBook from '../../assets/Images/girl-2604837_1920.jpg';
import womanStretch from '../../assets/Images/people-2573216_1280.jpg';
import violin from '../../assets/Images/violin-374096_1280.jpg';
import run from '../../assets/Images/run-1749410_1920.jpg';
import meditate from '../../assets/Images/sunset-691848_1280.jpg';
import bicycle from '../../assets/Images/bicycle-384566_1920.jpg';
import book from '../../assets/Images/book.jpg';
import comingSoon from '../../assets/ComingSoon.png';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';

export default function Okay() {
  const classes = useStyles();

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

  useEffect(() => bookResults());

  return (
    <Box style={{backgroundColor: 'rgb(240,240,240)'}}>
      <Container maxWidth="lg">
        <Box className="App">
          <Box className="okayDiv">

            <Typography variant="h2" className={classes.sectionTitle}>
              Okay
            </Typography>
            <Typography variant="h5" className={classes.subtitle}>
              Tools and Techniques to help Keep you Balanced!
            </Typography>

            <Grid container spacing={2} justify="center">
              <Grid item xs={12} sm={4} m={3}>
                <Typography variant='h3' className={classes.sectionTitle}>
                  Meditation
                </Typography>
                <Paper 
                  style={{ height: 1750, width: "90%", margin: '0 2.5% 0 7.5%'}}
                >
                    <Card>
                      <CardMedia
                        style={{ height: 150, width: "100%" }}
                        image={girlBook}
                        title='woman reading a book'
                      />
                      <CardMedia
                          image={comingSoon}
                          style={{ height: 150, width: "100%", backgroundColor: 'black', marginTop: '15px' }}
                          title='coming soon'
                      >
                        <Typography variant='h4' style={{paddingTop: '15px', fontWeight: 'bold'}}>
                          API
                        </Typography>
                      </CardMedia>
                      <CardContent>
                        
                        <iframe width="100%" height="300px" src="https://www.youtube.com/embed/xkEKJV1FSiw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        
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
                        
                        <iframe width="100%" height="300px" src="https://www.youtube.com/embed/86m4RC_ADEY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        
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
                        
                        <iframe width="100%" height="300px" src="https://www.youtube.com/embed/xB3G5-eA7hI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        
                      </CardContent>
                    </Card>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4} m={3}>
                  <Typography variant='h3' className={classes.sectionTitle}>
                    Activities
                  </Typography>
                  <Paper 
                    style={{ height: 1750, width: "90%", margin: '0 5% 0 5%'}}
                  >
                    <Card>
                      <CardMedia
                        style={{ height: 150, width: "100%" }}
                        image={run}
                        title='runner'
                      />
                      <CardMedia
                        image={comingSoon}
                        style={{ height: 150, width: "100%", backgroundColor: 'black', marginTop: '15px' }}
                        title='coming soon'
                      >
                        <Typography variant='h4' style={{paddingTop: '15px', fontWeight: 'bold'}}>
                          API
                        </Typography>
                      </CardMedia>
                      <CardContent>
                       
                        <iframe width="100%" height="300px" src="https://www.youtube.com/embed/oSQrlzzuTa4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        
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
                        
                        <iframe width="100%" height="300px" src="https://www.youtube.com/embed/BPK9WNtpBgk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        
                      </CardContent>
                    </Card>
                    <Card>
                      <CardMedia
                        style={{ height: 150, width: "100%" }}
                        image={bicycle}
                        title='cyclist'
                      />
                      <CardContent>
                        
                        <iframe width="100%" height="300px" src="https://www.youtube.com/embed/YCZssRQgddk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        
                      </CardContent>
                    </Card>
                  </Paper>
                </Grid>
              <Grid item xs={12} sm={4} m={3}>
                <Typography variant='h3' className={classes.sectionTitle}>
                  Books
                </Typography>
                <Paper 
                  style={{ height: 1750, width: "90%", margin: '0 7.5% 0 2.5%'}} 
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
                          <Typography className={classes.loading} variant='h3'>
                            Loading.
                          </Typography>
                          <Typography className={classes.loading} variant='h4'>
                            Loading..
                          </Typography>
                          <Typography className={classes.loading} variant='h5'>
                            Loading...
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
    </Box>
  );
}

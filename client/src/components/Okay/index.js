import React, { useState, useEffect } from 'react';

import Books from '../Books';
import { searchGoogleBooks } from '../../utils/Api';
import useStyles from '../../styles';
import '../../App.css';

import girlBook from '../../assets/Images/girl-reading.jpg';
import womanStretch from '../../assets/Images/stretch.jpg';
import violin from '../../assets/Images/violin.jpg';
import run from '../../assets/Images/run.jpg';
import meditate from '../../assets/Images/meditate.jpg';
import bicycle from '../../assets/Images/bicycle.jpg';
import book from '../../assets/Images/book-open.jpg';
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
    <Box className={classes.moodBackground}>
      <Container maxWidth='lg'>
        <Box className='App'>
          <Box className='okayDiv'>

            <Typography variant='h2' className={classes.sectionTitle}>
              Okay
            </Typography>
            <Typography variant='h5' className={classes.subtitle}>
              Tools and Techniques to help Keep you Balanced!
            </Typography>

            <Grid container spacing={2} justifyContent='center'>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant='h3' className={classes.sectionTitle}>
                  Meditation
                </Typography>
                <Paper className={classes.meditationSection}>
                  <Card>
                    <CardMedia
                      className={classes.sectionPic}
                      image={girlBook}
                      title='woman reading a book'
                    />
                    <CardMedia
                      image={comingSoon}
                      className={classes.comingSoon}
                      title='coming soon'
                    >
                      <Typography className={classes.soonApi} variant='h4'>
                        API
                      </Typography>
                    </CardMedia>
                    <CardContent>
                      <iframe width='100%' height='300px' src='https://www.youtube.com/embed/xkEKJV1FSiw' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardMedia
                      className={classes.sectionPic}
                      image={meditate}
                      title='sunset meditation'
                    />
                    <CardContent>
                      <iframe width='100%' height='300px' src='https://www.youtube.com/embed/86m4RC_ADEY' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardMedia
                      className={classes.sectionPic}
                      image={violin}
                      title='violin'
                    />
                    <CardContent>
                      <iframe width='100%' height='300px' src='https://www.youtube.com/embed/xB3G5-eA7hI' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant='h3' className={classes.sectionTitle}>
                  Activities
                </Typography>
                <Paper className={classes.activitiesSection}>
                  <Card>
                    <CardMedia
                      className={classes.sectionPic}
                      image={run}
                      title='runner'
                    />
                    <CardMedia
                      image={comingSoon}
                      className={classes.comingSoon}
                      title='coming soon'
                    >
                      <Typography className={classes.soonApi} variant='h4'>
                        API
                      </Typography>
                    </CardMedia>
                    <CardContent>
                      <iframe width='100%' height='300px' src='https://www.youtube.com/embed/oSQrlzzuTa4' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardMedia
                      className={classes.sectionPic}
                      image={womanStretch}
                      title='woman in a yoga stretch'
                    />
                    <CardContent>
                      <iframe width='100%' height='300px' src='https://www.youtube.com/embed/BPK9WNtpBgk' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardMedia
                      className={classes.sectionPic}
                      image={bicycle}
                      title='cyclist'
                    />
                    <CardContent>
                      <iframe width='100%' height='300px' src='https://www.youtube.com/embed/YCZssRQgddk' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant='h3' className={classes.sectionTitle}>
                  Books
                </Typography>
                <Paper className={classes.booksSection}>
                  <Card>
                    <CardMedia
                      className={classes.sectionPic}
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

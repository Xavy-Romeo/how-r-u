import React, { useState, useEffect } from 'react';

import Books from '../Books';
import { searchGoogleBooks } from '../../utils/Api';
import useStyles from '../../styles';
import '../../App.css';

import meditationPeace from '../../assets/Images/buddhism.jpg';
import stones from '../../assets/Images/stones.jpg';
import happyCouple from '../../assets/Images/couple.jpg';
import streetMarathon from '../../assets/Images/marathon.jpg';
import yoga from '../../assets/Images/yoga.jpg';
import chi from '../../assets/Images/fu.jpg';
import book from '../../assets/Images/book-confetti.jpg';
import comingSoon from '../../assets/ComingSoon.png';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

export default function Happy() {
  const classes = useStyles();

  const [bookSearchComplete, setBookSearchComplete] = useState(false);
  const [bookData, setBookData] = useState([{}]);

  useEffect(async() => {
    try {
      const bookSearch = await searchGoogleBooks('Happy');

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
  });

  return (
    <Box className={classes.moodBackground}>
      <Container maxWidth='lg'>
        <Box className='App'>
          <Box className='happyDiv'>
            
            <Typography variant='h2' className={classes.sectionTitle}>
              Happy
            </Typography>
            <Typography variant='h5' className={classes.subtitle}>
              Tools and Techniques to Keep you Moving!
            </Typography>

            <Grid container justifyContent='center'>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant='h3' className={classes.sectionTitle}>
                  Meditation
                </Typography>
                <Paper className={classes.meditationSection}>
                  <Card>
                    <CardMedia
                      className={classes.sectionPic}
                      image={meditationPeace}
                      title='meditation master'
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
                      <iframe width='100%' height='300px' src='https://www.youtube.com/embed/RqxVzWM8fLU' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardMedia
                      className={classes.sectionPic}
                      image={stones}
                      title='stones'
                    />
                    <CardContent>
                        <iframe width='100%' height='300px' src='https://www.youtube.com/embed/ZVmjNLqUkyI' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardMedia
                      className={classes.sectionPic}
                      image={happyCouple}
                      title='happy couple'
                    />
                    <CardContent>
                        <iframe width='100%' height='300px' src='https://www.youtube.com/embed/62uqI43b7hc' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
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
                      image={streetMarathon}
                      title=' many bikers in a marathon'
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
                        <iframe width='100%' height='300px' src='https://www.youtube.com/embed/PHpnPMF_ZCs' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardMedia
                      className={classes.sectionPic}
                      image={yoga}
                      title='woman doing yoga'
                    />

                    <CardContent>
                        <iframe width='100%' height='300px' src='https://www.youtube.com/embed/HlgmHxVXw7g' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardMedia
                      className={classes.sectionPic}
                      image={chi}
                      title='sunset chi'
                    />
                    <CardContent>
                      <iframe width='100%' height='300px' src='https://www.youtube.com/embed/NsZaY-EMpiA' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
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

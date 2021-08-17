import React, { useState, useEffect } from 'react';

import Books from '../Books';
import { searchGoogleBooks } from '../../utils/Api';
import useStyles from './styles';
import '../../App.css';

import sad from '../../assets/Images/sad1.jpg';
import handMeditate from '../../assets/Images/hand-meditate.jpg';
import headphones from '../../assets/Images/headphone.jpg';
import taiChi from '../../assets/Images/tai-chi.jpg';
import boxing from '../../assets/Images/boxing.jpg';
import hike from '../../assets/Images/adventure.jpg';
import comingSoon from '../../assets/ComingSoon.png';
import book from '../../assets/Images/book.jpg';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';


export default function Sad() {
  const classes = useStyles();

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

  useEffect(() => bookResults());

  return (
    <Box style={{backgroundColor: 'rgb(240,240,240)'}}>
      <Container maxWidth='lg'>
        <Box className='App'>
          <Box className='sadDiv'>

            <Typography variant='h2' className={classes.sectionTitle}>
              Sad
            </Typography>
            <Typography variant='h5' className={classes.subtitle}>
              Tools and Techniques To Help You Find A New Way!
            </Typography>

            <Grid container spacing={2} justifyContent='center'>
              <Grid item xs={12} sm={4} m={3}>
                <Typography variant='h3' className={classes.sectionTitle}>
                  Meditation
                </Typography>
                <Paper 
                  style={{ height: 1750, width: '90%', margin: '0 2.5% 0 7.5%'}}
                >
                  <Card>
                    <CardMedia
                      style={{ height: 150, width: '100%' }}
                      image={sad}
                      title='sad bw'
                    />
                    <CardMedia
                      image={comingSoon}
                      style={{ height: 150, width: '100%', backgroundColor: 'black', marginTop: '15px' }}
                      title='coming soon'
                    >
                      <Typography variant='h4' style={{paddingTop: '15px', fontWeight: 'bold'}}>
                        API
                      </Typography>
                    </CardMedia>
                    <CardContent>
                      <iframe width='100%' height='300px' src='https://www.youtube.com/embed/86m4RC_ADEY' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardMedia
                      style={{ height: 150, width: '100%' }}
                      image={handMeditate}
                      title='hands in lap'
                    />
                    <CardContent>
                      <iframe width='100%' height='300px' src='https://www.youtube.com/embed/bgs1rqr9UXA' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardMedia
                      style={{ height: 150, width: '100%' }}
                      image={headphones}
                      title='woman wearing headphones'
                    />
                    <CardContent>
                      <iframe width='100%' height='300px' src='https://www.youtube.com/embed/5rjtp2QLphE' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4} m={3}>
                <Typography variant='h3' className={classes.sectionTitle}>
                  Activities
                </Typography>
                <Paper 
                  style={{ height: 1750, width: '90%', margin: '0 5% 0 5%'}}
                >
                  <Card>
                    <CardMedia
                      style={{ height: 150, width: '100%' }}
                      image={taiChi}
                      title='tai chi couple'
                    />
                    <CardMedia
                    image={comingSoon}
                    style={{ height: 150, width: '100%', backgroundColor: 'black', marginTop: '15px' }}
                    title='coming soon'
                    >
                      <Typography variant='h4' style={{paddingTop: '15px', fontWeight: 'bold'}}>
                        API
                      </Typography>
                    </CardMedia>
                    <CardContent>
                      <iframe width='100%' height='300px' src='https://www.youtube.com/embed/NsZaY-EMpiA' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe> 
                    </CardContent>
                  </Card>
                  <Card>
                    <CardMedia
                      style={{ height: 150, width: '100%' }}
                      image={boxing}
                      title='woman boxer'
                    />
                    <CardContent>                     
                      <iframe width='100%' height='300px' src='https://www.youtube.com/embed/PoOi81Wwf3M' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardMedia
                      style={{ height: 150, width: '100%' }}
                      image={hike}
                      title='hiker on mountain'
                    />
                    <CardContent>
                      <iframe width='100%' height='300px' src='https://www.youtube.com/embed/ttr2ANenbOo' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4} m={3}>
                <Typography variant='h3' className={classes.sectionTitle}>
                  Books
                </Typography>
                <Paper 
                  style={{ height: 1750, width: '90%', margin: '0 7.5% 0 2.5%'}} 
                >
                  <Card>
                    <CardMedia
                      style={{ height: 150, width: '100%' }}
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
    </Box>
  );
}

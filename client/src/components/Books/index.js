import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    media: {
      height: '300px',
      width: '200px',
      margin: '20px auto 0 auto',
    },
});

export default function BookCards({ bookData }) {
    const classes = useStyles();

    return (
        <>
            <Card style={{backgroundColor: 'black', margin: '15px'}}>
                <CardMedia
                    className={classes.media}
                    image={bookData[0].image}
                    title='Book image'
                >             
                </CardMedia>
                
                <CardContent style={{color: 'white'}}>
                    <Typography component='p'>
                        Title: {bookData[0].title}
                    </Typography>
                    <Typography component='p'>
                        Author: {bookData[0].authors}
                    </Typography>
                </CardContent>

                <CardActions style={{display: 'flex', justifyContent: 'center'}}>
                    <Link
                        href={bookData[0].link}
                        target='_blank'
                        width='100%'
                        height='100%'
                        underline='none'
                    >
                        <Button variant='outlined' variant='contained' color='primary'>
                            View Book
                        </Button>
                    </Link>            
                </CardActions>
            </Card>
          
            <Card style={{backgroundColor: 'black', margin: '15px'}}>     
                <CardMedia
                    className={classes.media}
                    image={bookData[1].image}
                    title='Book image'
                >             
                </CardMedia>
                
                <CardContent style={{color: 'white'}}>
                    <Typography component='p'>
                        Title: {bookData[1].title}
                    </Typography>
                    <Typography component='p'>    
                        Author: {bookData[1].authors}
                    </Typography>
                </CardContent>

                <CardActions style={{display: 'flex', justifyContent: 'center'}}>
                    <Link
                        href={bookData[1].link}
                        target='_blank'
                        width='100%'
                        height='100%'
                        underline='none'
                    >
                        <Button variant='outlined' variant='contained' color='primary'>
                            View Book
                        </Button>
                    </Link>     
                </CardActions>
            </Card>

            <Card style={{backgroundColor: 'black', margin: '15px'}}> 
                <CardMedia
                    className={classes.media}
                    image={bookData[2].image}
                    title='Book image'
                >             
                </CardMedia>
                
                <CardContent style={{color: 'white'}}>
                    <Typography component='p'>
                        Title: {bookData[2].title}
                    </Typography>
                    <Typography component='p'>    
                        Author: {bookData[2].authors}
                    </Typography>
                </CardContent>

                <CardActions style={{display: 'flex', justifyContent: 'center'}}>
                    <Link
                        href={bookData[2].link}
                        target='_blank'
                        width='100%'
                        height='100%'
                        underline='none'
                    >
                        <Button variant='outlined' variant='contained' color='primary'>
                            View Book
                        </Button>
                    </Link> 
                </CardActions>
            </Card>
        </>
    );
};
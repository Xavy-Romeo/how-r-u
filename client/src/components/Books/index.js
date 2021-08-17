import React from 'react';

import useStyles from './styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

export default function BookCards({ bookData }) {
    const classes = useStyles();

    return (
        <>
            {bookData.map((book) => (
                <Box key={book.title}>
                    <Card className={classes.bookCard}>
                        <CardMedia
                            className={classes.bookImage}
                            image={book.image}
                            title='Book image'
                        >             
                        </CardMedia>
                        
                        <CardContent>
                            <Typography className={classes.bookInfo} variant='h5' component='span'>
                                Title:
                            </Typography>
                            <Typography className={classes.bookInfo} variant='subtitle1' component='p'>
                                {book.title}
                            </Typography>
                            <Typography className={classes.bookInfo} variant='h5' component='span'>
                                Author:
                            </Typography>
                            <Typography className={classes.bookInfo} variant='subtitle1' component='p'>
                                {book.authors}
                            </Typography>
                        </CardContent>
        
                        <CardActions className={classes.bookButton}>
                            <Link
                                href={book.link}
                                target='_blank'
                                width='100%'
                                height='100%'
                                underline='none'
                            >
                                <Button variant='contained' color='primary'>
                                    View Book
                                </Button>
                            </Link>            
                        </CardActions>
                    </Card>
                </Box>  
            ))}
        </>
    );
};
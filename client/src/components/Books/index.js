import React from 'react';

import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    makeStyles,
    Link
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 500,
    },
});

export default function BookCards({ mood, bookData }) {
    const classes = useStyles();

    return (
        <>
            <Card>
        
                <CardMedia
                    className={classes.media}
                    image={bookData[0].image}
                    // image={book1.image}
                    title='Book image'
                >             
                </CardMedia>
                
                <CardContent>
                    <Typography component='p'>
                        Title: {bookData[0].title}
                        Author: {bookData[0].authors}
                        {/* Title: {book1.title}
                        Author: {book1.authors} */}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button>
                        <Link
                            href={bookData[0].link}
                            // href={book1.link}
                            target='_blank'
                            width='100%'
                            height='100%'
                        >
                            View Book
                        </Link>
                    </Button>
                </CardActions>
        
            </Card>
          
            <Card>
                
                <CardMedia
                    className={classes.media}
                    image={bookData[1].image}
                    title='Book image'
                >             
                </CardMedia>
                
                <CardContent>
                    <Typography component='p'>
                        Title: {bookData[1].title}
                        Author: {bookData[1].authors}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button>
                        <Link
                            href={bookData[1].link}
                            target='_blank'
                            width='100%'
                            height='100%'
                        >
                            View Book
                        </Link>
                    </Button>
                </CardActions>
        
            </Card>

            <Card>
                
                        <CardMedia
                            className={classes.media}
                            image={bookData[2].image}
                            title='Book image'
                        >             
                        </CardMedia>
                        
                        <CardContent>
                            <Typography component='p'>
                                Title: {bookData[2].title}
                                Author: {bookData[2].authors}
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Button>
                                <Link
                                    href={bookData[2].link}
                                    target='_blank'
                                    width='100%'
                                    height='100%'
                                >
                                    View Book
                                </Link>
                            </Button>
                        </CardActions>
                
                    </Card>



        </>
       
    );
};
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

export default function BookCards({ bookData }) {
    const classes = useStyles();

    return (
        <>
            <Card>
        
                <CardMedia
                    className={classes.media}
                    image={bookData[0].image}
                    title='Book image'
                >             
                </CardMedia>
                
                <CardContent>
                    <Typography component='p'>
                        Title: {bookData[0].title}
                    </Typography>
                    <Typography component='p'>
                        Author: {bookData[0].authors}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button>
                        <Link
                            href={bookData[0].link}
                            target='_blank'
                            width='100%'
                            height='100%'
                        >
                            View Book
                        </Link>
                    </Button>
                </CardActions>
        
            </Card>
          
            {/* <Card>
                
                <CardMedia
                    className={classes.media}
                    image={bookData[1].image}
                    title='Book image'
                >             
                </CardMedia>
                
                <CardContent>
                    <Typography component='p'>
                        Title: {bookData[1].title}
                    </Typography>
                    <Typography component='p'>    
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
                            </Typography>
                            <Typography component='p'>    
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
                
                    </Card> */}



        </>
       
    );
};
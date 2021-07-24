import React, { useState, useEffect } from 'react';
import { bookResults } from '../../utils/Api';
import { searchGoogleBooks } from '../../utils/Api';

import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    makeStyles,
    CardActionArea,
    Link
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 200,
    },
});


export default function BookCards({ mood, bookData }) {
    const classes = useStyles();

    // const [bookSearchComplete, setBookSearchComplete] = useState(false);
    
    // const bookResults = async () => {
    //     try {
    //         const bookSearch = await searchGoogleBooks(mood);

    //         const { items } = await bookSearch.json();

    //         const bookInfo = await items.map((book) => ({
    //             authors: book.volumeInfo.authors || ['No author displayed'],
    //             title: book.volumeInfo.title,
    //             description: book.volumeInfo.description,
    //             image: book.volumeInfo.imageLinks?.thumbnail || ''
    //         }));

    //         setBookSearchComplete(true);

    //         return bookInfo;
    //     }
    //     catch (err) {
    //         console.log(err);
    //     }
    // };
    
    // const bookData = bookResults();
    // console.log('bookData', bookData);





    // const [bookSearchComplete, setBookSearchComplete] = useState(false);

    // const bookSearch = async () => {
    //     const res = await bookResults(mood);
    //     const bookInfo = await res.json()
    //     setBookSearchComplete(true);
    //     return bookInfo;
    // };

    // const bookData = bookSearch(); 
    
    // console.log('bookData', bookData)
    // console.log('bookData[0]', bookData[0]);

    // let bookSearchComplete;

    return (
        <>
            {/* {bookSearchComplete
                ? (
                    <Typography>...Loading </Typography>
                )
                : ( */}
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
                {/* )
            } */}

            {/* <Card>
                
                <CardMedia
                    className={classes.media}
                    image={bookData[1].image}
                    // image={book2.image}
                    title='Book image'
                >             
                </CardMedia>
                
                <CardContent>
                    <Typography component='p'>
                        Title: {bookData[1].title}
                        Author: {bookData[1].authors}
                        Title: {book2.title}
                        Author: {book2.authors} 
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button>
                        <Link
                            href={bookData[1].link}
                            // href={book2.link}
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
                            // image={book3.image}
                            title='Book image'
                        >             
                        </CardMedia>
                        
                        <CardContent>
                            <Typography component='p'>
                                Title: {bookData[2].title}
                                Author: {bookData[2].authors}
                                Title: {book3.title}
                                Author: {book3.authors}
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Button>
                                <Link
                                    href=           {bookData[2].link}
                                    // href={book3.link}
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
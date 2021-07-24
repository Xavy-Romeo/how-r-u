export const searchGoogleBooks = (mood) => {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=mediation when feeling ${mood}`);
};

// export const searchMeditation = (mood) => {
//     return fetch();
// };

// export const searchActivities = (mood) => {
//     return fetch();
// };

export const bookResults = async (mood) => {
    try {
        const bookSearch = await searchGoogleBooks(mood);
  
        const { items } = await bookSearch.json();
  
       
        // const books = [items[0].volumeInfo, items[1].volumeInfo, items[2].volumeInfo];
  
        const bookInfo = await items.map((book) => ({
            authors: book.volumeInfo.authors || ['No author displayed'],
            title: book.volumeInfo.title,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks?.thumbnail || ''
        }));
  
          // setBookSearchComplete(true);
          // setBookData([bookInfo[0], bookInfo[1], bookInfo[2]]);
          // console.log('bookInfo', bookInfo)
  
        const books = [bookInfo[0], bookInfo[1], bookInfo[2]];
        return books;
    }
    catch (err) {
        console.log(err);
    }
};
  
//   const bookData = await bookResults();
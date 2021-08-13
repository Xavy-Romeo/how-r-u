export const searchGoogleBooks = (mood) => {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=mediation when feeling ${mood}`);
};
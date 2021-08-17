import { makeStyles } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core';

import { red } from '@material-ui/core/colors';

export const theme = createTheme({
  typography: {
    fontFamily: 'Playfair Display, serif',
  }
});

export const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    cardBackground: {
      backgroundColor: 'rgb(240,240,240)',
    },
    cardInfo: {
      backgroundColor: 'rgb(240,240,240)',
      height: '80px',
    },
    media: {
      height: '300px',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
      color: 'black'
    },
}));
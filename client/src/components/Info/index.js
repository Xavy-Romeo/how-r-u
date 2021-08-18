import React, { useState } from 'react';

import { useStyles, theme } from './styles';
import clsx from 'clsx';

import { ThemeProvider } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import logo1200 from '../../assets/logo1200.png';

export default function Tools({ mydata, meditation, whyMeditation, activities, whyActivities, books, whyBooks, Mindfulness, initial }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        <CardHeader
          className={classes.cardBackground}
          avatar={
            <Avatar aria-label='Meditation' className={classes.avatar}>
              <Typography variant='h5'>
                {initial}  
              </Typography>
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <Typography className={classes.infoTitle} variant='h5'>
              {Mindfulness}
            </Typography>
          }
        />
        <CardMedia
          className={classes.media}
          image={logo1200}
          title='Paella dish'
        />
        <CardContent className={classes.cardInfo}>
          <Typography variant='body2' component='p'>
            {mydata}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardBackground} disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>{meditation}</Typography>
            <Typography paragraph>{whyMeditation}</Typography>
            <Typography paragraph>{activities}</Typography>
            <Typography paragraph>{whyActivities}</Typography>
            <Typography paragraph>{books}</Typography>
            <Typography paragraph>{whyBooks}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </ThemeProvider>
  );
};
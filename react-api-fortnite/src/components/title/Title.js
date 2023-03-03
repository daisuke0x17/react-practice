import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles((theme) => ({
    titleName: {
      textAlign: "center",
      marginTop: theme.spacing(5),
      fontSize: "60px",
    },
  }));

const Title = () => {
    const classes = useStyle();
  return (
    <div className='title'>
        <Typography variant="h2" className={classes.titleName}>
            Track Fortnite Status...
        </Typography>
    </div>
  )
}

export default Title

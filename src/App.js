import React from 'react';
import Portal from '@material-ui/core/Portal';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  alert: {
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
    border: '1px solid',
    bordearColor: theme.palette.text.primary,
  },
}));

export default function SimplePortal() {
  const [show, setShow] = React.useState(false);
  const container = React.useRef(null);
  const classes = useStyles();

  function handleClick() {
    setShow(!show);
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClick}>{show ? 'Results' : 'Translate'}</Button>
      <div className={classes.alert}>
        <Typography>Input your scipts</Typography>
        {show ? (
          <Portal container={container.current}>
            <Typography>This is the result</Typography>
          </Portal>
        ) : null}
      </div>
      <div className={classes.alert} ref={container} />
    </div>
  );
}


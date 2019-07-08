import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({

  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },

  
}));

export default function SimplePortal() {
  const [show, setShow] = React.useState(false);
  // const container = React.useRef(null);
  const classes = useStyles();

  function handleClick() {
    setShow(!show);
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClick}>{show ? 'Reset' : 'Translate'}</Button>

        <form className={classes.container} noValidate>
          <TextField 
            id="outlined-search"
            label="Input your text"
            type="search"
            multiline
            rows="4"
            margin="normal"
            variant="outlined"
            fullWidth
          />  
        </form>

        {show ? (
          <form className={classes.container} noValidate>
            <TextField
              label="This is the result"
              multiline
              rows="4"
              defaultValue="Result here..."
              margin="normal"
              variant="outlined" 
              fullWidth
              InputProps={{
                readOnly: true,
              }}
            />  
          </form>
        ) : null}
    </div>
  );
}


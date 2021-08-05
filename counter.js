import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}));

const Counter = props => {
  const classes = useStyles();

  const [num, setNum] = React.useState(0);

  const handleIncrement = event => {
    setNum(num + 1);
  };

  const handleDecrement = event => {
    if (num > 0) setNum(num - 1);
  };

  const handleClear = event => {
    if (num > 0) setNum(0);
  };

  return (
    <div className={classes.root}>
      <p>{num}</p>
      <Button variant="contained" color="primary" onClick={handleIncrement}>
        Increment
      </Button>
      <Button variant="contained" color="secondary" onClick={handleDecrement}>
        Decrement
      </Button>
      <Button variant="outlined" color="secondary" onClick={handleClear}>
        Clear
      </Button>
      <IconButton
        onClick={handleDecrement}
        aria-label="delete"
        className={classes.margin}
        size="small"
      >
        <ArrowDownwardIcon fontSize="inherit" />
        Decrement
      </IconButton>
    </div>
  );
};
export default Counter;

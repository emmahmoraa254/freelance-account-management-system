import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const buttonStyles = makeStyles((theme) => ({
  button: {
    variant: 'contained',
    color: '#000',
    background: 'white',
    width: '15vh',
    marginLeft: '90px',
  },
  button_delete: {
    background: 'red',
  },
}));

export function Button_AddAccount(props) {
  const classes = buttonStyles();
  /* TODO: use props to show different texts on the button*/
  return (
    <Button onClick={props.onClick} className={classes.button}>
      {props.children}{' '}
    </Button>
  );
}

export function Button_UpdateAccount() {
  const classes = buttonStyles();
  // TODO: use props to show different texts on the button
  return (
    <Button className={[classes.button, classes.button_delete].join(' ')}>
      Update
    </Button>
  );
}

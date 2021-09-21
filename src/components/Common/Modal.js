import React from 'react';
import { makeStyles, createTheme } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AddAccount from '../../pages/Accounts/AddAccount';
import AddDc from '../../pages/Accounts/AddDc';
import UpdateAccount from '../../pages/Accounts/UpdateAccount';
import UpdateDc from '../../pages/Accounts/UpdateDc';

import './Modal.css';
import updateDc from '../../pages/Accounts/UpdateDc';

const modalBackground = createTheme({
  palette: {
    background: {
      paper: '#783876',
    },
    height: '50%',
    width: '20%',
  },
});

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: modalBackground.palette.background.paper,
    border: '2px solid #783876',
    boxShadow: theme.shadows[3],
    padding: theme.spacing(2, 4, 3),
    height: modalBackground.palette.height,
    width: modalBackground.palette.width,
  },
  button: {
    variant: 'contained',
    color: '#000',
    background: 'white',
    width: '15vh',
    marginLeft: '90px',
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type='button' onClick={handleOpen}>
        react-transition-group
      </button>
      <div>
        <Modal
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              /* TODO: Use props to show different pages */
              {/* <AddAccount /> */}
              {/* <AddDc /> */}
              <UpdateAccount />
              {/* <UpdateDc /> */}
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}

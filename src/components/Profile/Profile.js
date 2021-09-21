import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import './Profile.css';

export default function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label='more'
        aria-controls='long-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreVertIcon className='menu-dots' />
      </IconButton>
      <div>
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <div className='profile-card'>
            <MenuItem onClick={handleClose}>Role</MenuItem>
            <hr />
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <hr />
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </div>
        </Menu>
      </div>
    </div>
  );
}

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css'
import { Button, Menu, MenuItem, TextField } from '@mui/material';
import Fade from '@mui/material/Fade';

export default function ManuBar() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" >
        <Toolbar  className="topBarMenuBar">
            <div>
        <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      </div>
      <div className="topBarMenuBarItems">
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>       <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>       <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>       <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>       <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>       <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
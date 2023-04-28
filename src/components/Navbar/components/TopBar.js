import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css'
import { TextField } from '@mui/material';
import ManuBar from './Menubar';
export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" >
        <Toolbar variant="dense" className="topBar">
          {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Toolbar>
        <Toolbar  className="topBarSearch">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <TextField className="topBarSearchField"/>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon sx={{ mr: 2 }} />
            <MenuIcon />
          </IconButton>
          
        </Toolbar>
        <ManuBar/>
        {/* <Toolbar  className="topBarMenuBar">
        <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Toolbar> */}
      </AppBar>
    </Box>
  );
}
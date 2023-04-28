import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css'
import { TextField } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import ManuBar from './Menubar';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Select, MenuItem } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'French' },
    { value: 'es', label: 'Spanish' },
    // add more language options here
  ];
  
export default function DenseAppBar() {
    const [selectedLanguage, setSelectedLanguage] = React.useState('en');

    const handleChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" >
        <Toolbar variant="dense" className="topBar">
          {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" color="inherit" component="div">
            +92 000088888999
          </Typography>
          <div style={{display:"flex", alignItems:"center"}}>
           <Select className="topBarSelect" value={selectedLanguage} onChange={handleChange} defaultValue="en">
                {languageOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </Select>
            <FacebookIcon   className="topNavIcons" />
            <InstagramIcon  className="topNavIcons"/>
            <TwitterIcon className="topNavIcons" />
          </div>
        </Toolbar>
        <Toolbar  className="topBarSearch">
            <div  style={{display:"flex", alignItems:"center"}}>
        <AdbIcon 
        sx={{
            //  display: { xs: 'none', md: 'flex' },
              mr: 1 }} 
        />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            cartMate
          </Typography>
          </div>
          <TextField  className="topBarSearchField" placeholder='Search...' variant="outlined" style={{borderRadius:"50%"}}/>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <AccountCircleOutlinedIcon sx={{ mr: 2 }}  />
            <LocalMallOutlinedIcon />
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
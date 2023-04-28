import  React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css'
import { Button, Menu, MenuItem, TextField } from '@mui/material';
import Fade from '@mui/material/Fade';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { List, ListItem, ListItemIcon, ListItemText, Popover } from '@mui/material';


const categories = [
    { name: 'Category 1', value: 'category-1' },
    { name: 'Category 2', value: 'category-2' },
    { name: 'Category 3', value: 'category-3' },
  ];

  
export default function ManuBar() {

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedValue, setSelectedValue] = useState('');
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleListItemClick = (event, value) => {
        setSelectedValue(value);
        handleClose();
      };
  
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" >
        <Toolbar  className="topBarMenuBar">
            <div  className="categoriesBtn">
            <Button
            // id="fade-button"
            // aria-controls={open ? 'fade-menu' : undefined}
            // aria-haspopup="true"
            // aria-expanded={open ? 'true' : undefined}
            style={{width:"278px"}}
            size="large" 
            onClick={handleClick}
            startIcon={<ListOutlinedIcon sx={{mr:2}} />}
            endIcon={<ListOutlinedIcon />}
        >
        {selectedValue || 'Select an option'}
      </Button>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        className="my-popover"
      >
           <List className="my-list">
          {categories.map((category) => (
            <ListItem
              key={category.value}
              button
              onClick={(event) => handleListItemClick(event, category.value)}
              selected={selectedValue === category.value}
              className="my-list-item"
            >
              <ListItemText primary={category.name} />
            </ListItem>
          ))}
        </List>
      </Popover>
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
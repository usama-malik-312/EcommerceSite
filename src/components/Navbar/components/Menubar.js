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
import { List, ListItem, ListItemIcon, ListItemText, Popover, Select } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNavigate  } from 'react-router-dom';


const categories = [ 
    { name: 'Category 1', value: 'category-1' },
    { name: 'Category 2', value: 'category-2' },
    { name: 'Category 3', value: 'category-3' },
  ];

  const pages = [
    { label: 'Page 1', value: 'page1' },
    { label: 'Page 2', value: 'page2' },
    { label: 'Page 3', value: 'page3' },
  ];
  
export default function ManuBar() {

    //  const navigate  = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedValue, setSelectedValue] = useState('');
    const open = Boolean(anchorEl);
    const [selectedPage, setSelectedPage] = useState('page1');



    const handlePageChange = (event) => {
      setSelectedPage(event.target.value);
      // navigate(`/`);
    };
  
    const handleMenuOpen = (event) => {
      event.preventDefault();
    };
  


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
            startIcon={<ListOutlinedIcon fontSize='large'  />}
            endIcon={anchorEl ? <KeyboardArrowUpIcon sx={{ml:5}} />: <KeyboardArrowDownIcon sx={{ml:5}} />  }
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
      <Select
          value={selectedPage}
          label="pages"
          onChange={handlePageChange}
          onMouseOver={handleMenuOpen}
          className="menuBarSelect"
          sx={{ '& .MuiSelect-menu': { marginTop: '40px' } }}
          MenuProps={{ onMouseLeave: handleMenuOpen }}
        >
          {pages.map((page) => (
            <MenuItem key={page.value} value={page.value}>
              {page.label}
            </MenuItem>
          ))}
        </Select>

        <Select
          value={selectedPage}
          label="pages"
          onChange={handlePageChange}
          onMouseOver={handleMenuOpen}
          className="menuBarSelect"
          sx={{ '& .MuiSelect-menu': { marginTop: '40px' } }}
          MenuProps={{ onMouseLeave: handleMenuOpen }}
        >
          {pages.map((page) => (
            <MenuItem key={page.value} value={page.value}>
              {page.label}
            </MenuItem>
          ))}
        </Select> 
        
          <Select
          value={selectedPage}
          label="pages"
          onChange={handlePageChange}
          onMouseOver={handleMenuOpen}
          className="menuBarSelect"
          sx={{ '& .MuiSelect-menu': { marginTop: '40px' } }}
          MenuProps={{ onMouseLeave: handleMenuOpen }}
        >
          {pages.map((page) => (
            <MenuItem key={page.value} value={page.value}>
              {page.label}
            </MenuItem>
          ))}
        </Select>


        <Select
          value={selectedPage}
          label="pages"
          onChange={handlePageChange}
          onMouseOver={handleMenuOpen}
          className="menuBarSelect"
          sx={{ '& .MuiSelect-menu': { marginTop: '40px' } }}
          MenuProps={{ onMouseLeave: handleMenuOpen }}
        >
          {pages.map((page) => (
            <MenuItem key={page.value} value={page.value}>
              {page.label}
            </MenuItem>
          ))}
        </Select>

        <Select
          value={selectedPage}
          label="pages"
          onChange={handlePageChange}
          onMouseOver={handleMenuOpen}
          className="menuBarSelect"
          sx={{ '& .MuiSelect-menu': { marginTop: '40px' } }}
          MenuProps={{ onMouseLeave: handleMenuOpen }}
        >
          {pages.map((page) => (
            <MenuItem key={page.value} value={page.value}>
              {page.label}
            </MenuItem>
          ))}
        </Select>

        <Select
          value={selectedPage}
          label="pages"
          onChange={handlePageChange}
          onMouseOver={handleMenuOpen}
          className="menuBarSelect"
          sx={{ '& .MuiSelect-menu': { marginTop: '40px' } }}
          MenuProps={{ onMouseLeave: handleMenuOpen }}
        >
          {pages.map((page) => (
            <MenuItem key={page.value} value={page.value}>
              {page.label}
            </MenuItem>
          ))}
        </Select>


          {/* <Typography variant="h6" color="inherit" component="div">
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
          </Typography> */}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
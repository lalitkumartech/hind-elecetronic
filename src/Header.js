import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { BrowserRouter as Router,Routes,Route, Link as RouterLink, Link, useNavigate } from "react-router-dom";
import "../src/style.css"
import Banner from './All-components/Landing-page/Banner';
import { Container } from '@mui/material';
import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";



const drawerWidth = 240;
// const navItems = ['Home1', 'Product', 'Pricing','Contact'];

function Header(props) {
  //const container = window !== undefined ? () => window().document.body : undefined;
  const [position, setPosition] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true) 
  useEffect(()=> {
      const handleScroll = () => {
         let moving = window.pageYOffset
         
         setVisible(position > moving);
         setPosition(moving)
      };
      window.addEventListener("scroll", handleScroll);
      return(() => {
      window.removeEventListener("scroll", handleScroll);
      })
  })

const cls = visible ? "visible" : "hidden";
 






  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src='/hind-electricals.png' alt='logo'/>
      </Typography>
      <Divider />
      <List>
        {/* {navItems.map((item) => ( */}
        
          <ListItem disablePadding sx={{display: 'block'}}>
            <ListItemButton sx={{ textAlign: 'left' }}>
            
              <ListItemText onClick={() => navigate('/')} primary={"Home"} />
            </ListItemButton>
           
            <ListItemButton sx={{ textAlign: 'left' }}>
            <ListItemText onClick={() => navigate('/about')} primary={"About"} />
              
            </ListItemButton>

           
            <ListItemButton sx={{ textAlign: 'left' }}>
              <ListItemText onClick={() => navigate('/blog')} primary={"Blog"} />
            </ListItemButton>

            <ListItemButton sx={{ textAlign: 'left' }}>
              <ListItemText onClick={() => navigate('/contact')} primary={"Contact"} />
            </ListItemButton>

          </ListItem>
        {/* ))} */}
      </List>
    </Box>
  );

  

  return (
    <Box className="header_sec cls">
    

    
      <AppBar className={cls} component="nav">
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <img src='/hind-electricals.png' alt='logo'/>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }} className='nav_list'>
            {/* {navItems.map((item) => ( */}
              <Button sx={{ color: '#fff' }} onClick={()=> navigate('/')}>
                Home
              </Button>
              
              <Button sx={{ color: '#fff' }} onClick={()=> navigate('/about')}>
                About
              </Button>
              
              <Button onClick={() => navigate('/blog')} sx={{ color: '#fff' }}>
                Blog
              </Button>
              <Button sx={{ color: '#fff' }} onClick={()=> navigate('/contact')}>
                Contact
              </Button>
            {/* ))} */}
          </Box>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
      <nav>
        <Drawer
        className='nav_list'
         // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      </Container>
<Box >
    
      {/* =====banner-sec=== */}
      <Banner />
      {/* =====banner-sec=end=== */}
</Box>
    </Box>
  );
};


export default Header;
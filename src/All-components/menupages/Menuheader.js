import * as React from 'react';
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
import { BrowserRouter as Router,Routes,Route as RouterLink, useNavigate } from "react-router-dom";
import "../../../src/style.css"
import "./style.css"
import { Container } from '@mui/material';




const drawerWidth = 240;
// const navItems = ['Home1', 'Product', 'Pricing','Contact'];

function Menuheader(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
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
              <ListItemText onClick={() => navigate('/gallery')} primary={"Gallery"} />
            </ListItemButton>

            <ListItemButton sx={{ textAlign: 'left' }}>
              <ListItemText onClick={() => navigate('/contact')} primary={"Contact"} />
            </ListItemButton>

          </ListItem>
        {/* ))} */}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className="menu_header-sec">
    

    
      <AppBar component="nav">
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
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }} className='nav_list'>
            {/* {navItems.map((item) => ( */}
              <Button sx={{ color: '#fff' }} onClick={()=> navigate('/')}>
                Home
              </Button>
              
              <Button sx={{ color: '#fff' }} onClick={()=> navigate('/about')}>
                About
              </Button>
              
              <Button onClick={() => navigate('/gallery')} sx={{ color: '#fff' }}>
              Gallery
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
          container={container}
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
<Box>
    
      {/* =====banner-sec=== */}
      
      {/* =====banner-sec=end=== */}
</Box>
    </Box>
  );
};


export default Menuheader;
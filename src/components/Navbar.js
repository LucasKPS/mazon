// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <div className="navbar">
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <h1>Nossos Produtos</h1>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <List>
          <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Início" />
          </ListItem>
          <ListItem button component={Link} to="/products" onClick={toggleDrawer(false)}>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Produtos" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
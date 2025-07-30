// frontend/src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Register', path: '/register' },
  { label: 'Users', path: '/users' },
  { label: 'Application', path: '/apply-leave' },
  { label: 'Leaves', path: '/leave-list' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
        | FlowLeave |
        </Typography>

        {mobile ? (
          <>
            <IconButton size="small" color="inherit" onClick={() => setOpen(true)}>
              <MenuIcon fontSize="small" />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
              <List sx={{ width: 200, p: 0 }}>
                {navItems.map(item => (
                  <ListItem
                    button
                    key={item.label}
                    component={Link}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    sx={{ py: 1, px: 2 }}
                  >
                    <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: '0.875rem' }} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          navItems.map(item => (
            <Button
              key={item.label}
              component={Link}
              to={item.path}
              sx={{ ml: 1 }}
              size="small"
            >
              {item.label}
            </Button>
          ))
        )}
      </Toolbar>
    </AppBar>
  );
}

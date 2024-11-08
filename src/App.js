import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const Navbar = ({ items, orientation = 'horizontal', sx }) => {
  return (
    <Box 
      sx={{
        display: orientation === 'horizontal' ? 'flex' : 'block',
        ...sx,  // აქ დამატებით ჩასვით ნებისმიერი სტილი მშობელი კომპონენტისგან
      }}
    >
      <List sx={{ display: 'flex', flexDirection: orientation === 'horizontal' ? 'row' : 'column', padding: 0 }}>
        {items.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ width: orientation === 'horizontal' ? 'auto' : '100%' }}>
            <ListItemButton sx={{ justifyContent: orientation === 'horizontal' ? 'center' : 'flex-start' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Navbar;
import React from 'react';
import { Box, Stack, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom'; // ან ჩვეულებრივი <a> თუ router არ გამოიყენება

const NavbarContainer = styled(Box)(({ theme, direction }) => ({
  display: 'flex',
  flexDirection: direction === 'vertical' ? 'column' : 'row',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  borderRadius: theme.shape.borderRadius,
}));

function Navbar({ direction = 'horizontal', links = [] }) {
  return (
    <NavbarContainer direction={direction}>
      {links.map((link) => (
        <Button
          key={link.label}
          component={Link}
          to={link.path}
          variant="text"
          sx={{
            color: 'text.primary',
            textAlign: direction === 'vertical' ? 'left' : 'center',
          }}
        >
          {link.label}
        </Button>
      ))}
    </NavbarContainer>
  );
}

export default Navbar;
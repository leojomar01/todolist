import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
// import '../header.css';
import styled from 'styled-components';


const NavList = styled.a
`text-decoration: none;`;
const StyledLink = styled(Link) 
`color: white; 
text-decoration: none; 
margin: 1rem;
position: relative;

&:hover,
&:focus {
  color: yellow;
}
`;

const Header = () => {
    
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

          <NavList>
            
            <StyledLink to="/DisplayAssignment"></StyledLink>
            


            

          </NavList>

        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}
export default Header;

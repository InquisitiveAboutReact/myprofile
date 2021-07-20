import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Box, Hidden } from "@material-ui/core";
import { useStyles } from "./HeaderStyles";
import { IconButton } from "@material-ui/core";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Image from '../../images/profile.jpg'
import ContactMailIcon from '@material-ui/icons/ContactMail';
import {Link} from 'react-scroll';

function Navbar({navlinks , handleDrawerToogle}) {
  const classes = useStyles();
  // const navlinks = [
  //   { label: "Profile", Id: "Profile", icon:<LinkedInIcon onClick={()=>{window.open("https://www.linkedin.com/in/rajachatterjee84/")}}/>},
  //   { label: "Github", Id: "Github", icon:<GitHubIcon onClick={()=>{window.open("https://github.com/InquisitiveAboutReact")}}/> },
  //   { label: "Contact", Id: "Contact", icon:<ContactMailIcon /> },
  // ];

  return (
    <AppBar position="fixed" className={classes.Navbar}>
      <Toolbar className={classes.Toolbar}>
        <Typography variant="h5" component="h6"> 
        <img src={Image} alt="Avatar" style={{width:"120px",height:'auto',borderRadius:"20%", marginTop:'10px'}}></img>
        </Typography>
        <Box component={Hidden} xsDown>
        <Box>
          {navlinks.map((item, index) => (
            <Button key={index} className={classes.navlink}
            activeClass='active'
            to={`${item.Id}`}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            color='inherit'
            component={Link}
            >{item.label}{item.icon}</Button>
          ))}
          </Box>
        </Box>
        <Box component={Hidden} smUp>
        <IconButton color='inherit' onClick={handleDrawerToogle}><MenuBookIcon /></IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

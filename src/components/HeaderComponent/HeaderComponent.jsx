import React from "react";
import { useStyles } from "./HeaderStyles";
import { Box, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Navbar from "./Navbar";
import InfoSharpIcon from '@material-ui/icons/InfoSharp';
import ArrowDownwardSharpIcon from '@material-ui/icons/ArrowDownwardSharp';
import DrawerComponent from "./DrawerComponent";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Popper from '@material-ui/core/Popper';



function HeaderComponent() {
  const classes = useStyles();
  const [initialState, setInitialState] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const contactId = open ? 'simple-popper' : undefined;

  const handleDrawerToogle = ()=>{
      setInitialState(!initialState);
  };

  const handleContact = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const navlinks = [
    { label: "Profile", Id: "Profile", icon:<LinkedInIcon onClick={()=>{window.open("https://www.linkedin.com/in/rajachatterjee84/")}} onmouseover="" style={{cursor: "pointer"}}/>},
    { label: "GitRepo", Id: "Github", icon:<GitHubIcon onClick={()=>{window.open("https://github.com/InquisitiveAboutReact")}} onmouseover="" style={{cursor: "pointer"}}/> },
    { label: "Contact", Id: "Contact", icon:<ContactMailIcon aria-describedby={contactId} onClick={handleContact}/>},
  ];

  return (
    <Box className={classes.HeaderWrapper} id="Profile">
      <Navbar navlinks={navlinks} handleDrawerToogle={handleDrawerToogle}/>
       <DrawerComponent initialState={initialState} navlinks={navlinks} handleDrawerToogle={handleDrawerToogle}/>
      <Box className={classes.HeaderContainer}>
      <Grid item sm={6} lg={12} xs={10} md={10}>
        <Typography variant="h4" component="h5" className={classes.HeaderTitle}>
          Raja Chatterjee
         
        </Typography>
        
        <Typography variant="h5" component="h6" className={classes.HeaderDesc}>
          17+ years of experience in IT Industry having Deep knowledge and
          experience in Project / Program & Delivery management , <br /> leading cross
          cultural teams globally, efficient in working closely with
          international clients, make sure of smooth deliveries of projects and
          experience leading both development & support projects.. <br /> 
          I love travelling, passionate about photography, a motorhead, sportslover and a food lover. <br /> 
          Very much fond of music, love to watch movies and web series in my free time.
        </Typography>
        </Grid>
        
        <Box className={classes.decorator}>
          <Typography className={classes.decoratorText} variant='span' component="h4">
            <InfoSharpIcon /> Scroll down to more about my work <ArrowDownwardSharpIcon />
          </Typography>
        </Box>
      </Box>
      <Popper contactId={contactId} open={open} anchorEl={anchorEl}>
        <div className={classes.paper}>Please contact me through Linkedin / Github</div>
      </Popper>
    </Box>
  );
}

export default HeaderComponent;

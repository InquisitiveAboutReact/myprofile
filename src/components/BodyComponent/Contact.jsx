import { Box, Typography } from '@material-ui/core'
import React from 'react';
import { useStyles } from './BodyStyle';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Contact() {
    const classes = useStyles();
    return (
        <Box id="Contact" className={classes.contact}>
         <Typography variant="h6" component="p" className={classes.contactdesc}>
             Please Contact Me through Linkedin or Github by clicking below links
         </Typography>
         <br />
         <LinkedInIcon onClick={()=>{window.open("https://www.linkedin.com/in/rajachatterjee84/")}} onmouseover="" style={{cursor: "pointer", paddingRight:'10px'}}/> 
         <GitHubIcon onClick={()=>{window.open("https://github.com/InquisitiveAboutReact")}} onmouseover="" style={{cursor: "pointer"}}/>


        </Box>
    )
}

export default Contact

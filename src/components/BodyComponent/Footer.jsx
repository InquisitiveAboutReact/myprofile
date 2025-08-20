import React from 'react';
import { Box, Typography } from '@material-ui/core'
import {useStyles} from './BodyStyle';
import CodeIcon from '@material-ui/icons/Code';
import ProfileVisit from './ProfileVisit';

function Footer() {

   const classes = useStyles();
    return (
       <Box className={classes.footer} id="Footer">
        <Typography variant="body1" component="h4" align="center" color="inherit">
          ✓ Developed, Designed & Maintained by Raja Chatterjee <br />
            All rights reserved, 2025 ©
            <br /><br />
          <span className={classes.profilefooter}>
            <ProfileVisit />
          </span>
        </Typography>
       </Box>
    )
}

export default Footer

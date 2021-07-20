import React from 'react';
import { Box, Typography } from '@material-ui/core'
import {useStyles} from './BodyStyle';
import CodeIcon from '@material-ui/icons/Code';

function Footer() {

   const classes = useStyles();
    return (
       <Box className={classes.footer} id="Footer">
        <Typography variant="body1" component="h4" align="center" color="inherit">
          <CodeIcon /> Developed & Designed by Raja Chatterjee <br />
            All rights reserved, 2021 ©
        </Typography>
       </Box>
    )
}

export default Footer

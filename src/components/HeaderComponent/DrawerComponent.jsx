import { Box, Drawer, List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import { useStyles } from './HeaderStyles';

function DrawerComponent({handleDrawerToogle, navlinks, initialState }) {
    const classes = useStyles();
    return (
        <Drawer anchor="left" open={initialState} onClose={handleDrawerToogle} className={classes.drawer}>
            <Box className={classes.drawerWrapper}>
               <List style={{paddingTop:'30px'}}>
               {navlinks.map((item,index)=>(
                <ListItem key={index} className={classes.listItem}>
                       <ListItemText>
                            {item.label} {item.icon}
                       </ListItemText>
                   </ListItem>
               ))}
                   
               </List>
            </Box>
        </Drawer>
    )
}

export default DrawerComponent

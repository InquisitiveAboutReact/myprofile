import {makeStyles} from '@material-ui/core';
import Image from '../../images/cover.JPG'
import { Theme } from '../Theme';

export const useStyles = makeStyles(()=>({
    HeaderWrapper:{
      width:'100%',
      minHeight:'90vh',
      height:"auto",
     // background: Theme.colors.base1,
     background: `linear-gradient(to bottom right, #04303140, #00606473), url(${Image})`,
     backgroundSize:"cover",
     backgroundRepeat:"no-repeat"
    },
    HeaderContainer:{
      width:'100%',
      minHeight:'90vh',
      height:"auto",
      padding:'20px',
      color: Theme.colors.base2,
      display:'flex',
      flexFlow:'column wrap',
      justifyContent:'center'
    },
    HeaderTitle:{
      fontSize:"3rem"
    },
    HeaderDesc:{
      fontSize:"1.2rem",
    },
    Navbar:{
      background: Theme.colors.base1,
      color: Theme.colors.base2
    },
    Toolbar:{
      display:"flex",
      flexFlow:"row wrap",
      justifyContent:"space-between"
    },
    navlink:{
      color: Theme.colors.base2,
      fontSize:'18px'
    },
    decorator:{
     display:"flex",
     fontWeight:"bolder",
     position:'relative',
     marginTop:'20px',
     '&:before':{
       width:'40px',
       height:'40px',
       backgroundColor: Theme.colors.primary,
       content:'" "',
       borderRadius:"50%",
     }
    },
    decoratorText:{
      lineHeight:'45px',
      position:'absolute',
      left:'25px'
    },
    drawer:{
      width: '250px',
      height: '100vh',
    },
    drawerWrapper:{
      width: '250px',
      height: '100vh',
      backgroundColor: Theme.colors.primary1,
    },
    listItem:{
      color: Theme.colors.base2,
    },
    paper: {
      border: '1px solid',
      padding: "10px",
      marginTop:'40px',
      marginRight:'60px',
      align:'left',
      backgroundColor: Theme.colors.base1,
      color: Theme.colors.base2
    },
     AboutMeMore:{
        color: '#F8C35A',
        fontFamily:"Calibri",
        fontStyle:'Italic',
        fontWeight:'bolder',
        fontSize:'20px'
     },
      Websiteslist:{
        color: '#e88605ff',
        fontFamily:"Calibri",
        fontStyle:'Italic',
        fontWeight:'bolder',
        fontSize:'20px'
     },
     Websiteslistdef:{
        color: '#f5be09ff',
        fontFamily:"Calibri",
        fontStyle:'Italic',
        fontWeight:'bolder',
        fontSize:'14px',
        alignContent:'right',
     }
}))


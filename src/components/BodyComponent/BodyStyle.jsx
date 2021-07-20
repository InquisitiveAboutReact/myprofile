import { makeStyles } from "@material-ui/core";
import {Theme} from '../Theme'

export const useStyles = makeStyles((theme)=>({
    section:{
        backgroundColor: Theme.colors.base1,
        padding:theme.spacing(10,0,8,0)

    },
    divider:{
        width:'60px',
        height:'6px',
        backgroundColor: "cyan"
    },
    responsiveImg:{
        width:"100%",
        height:"auto",

    },
    sectionHeadingContainer:{
        padding:theme.spacing(1),

    },
    sectionHeading:{
        color: Theme.colors.base2,
        margin:theme.spacing(2,0),
        fontSize:'24px'
    },
    sectionDesc:{
      fontWeight:'bolder',
      fontSize:'24px',
      fontFamily:'Tahoma',
      color: Theme.colors.base2,
    },
    intro:{
        color: Theme.colors.base2,
        fontFamily:"Georgia",
        fontStyle:'Italic'
    },
    introdesc:{
        color: "yellow",
        fontFamily:"Georgia",
        fontStyle:'Italic'
    },
    techstack:{
        fontFamily:'cursive',
        color: Theme.colors.primary,
        fontWeight:'bolder',
    },
    certification:{
        fontFamily:'cursive',
        color: Theme.colors.primary,
        fontWeight:'bolder',
    },
    certificationHeading:{
        color: Theme.colors.base2,
        fontFamily:"Georgia"
    },
    horizontalStyle:{
        color: Theme.colors.base2,
    },
    footer:{
        backgroundColor: Theme.colors.primary,
        color: Theme.colors.base2,
        padding:theme.spacing(2),
        position:"relative",

    },
    contact:{
        backgroundColor: '#013844',
        color: Theme.colors.base2,
        padding:'10px'
    },
    contactdesc:{
        fontFamily:'cursive',
        fontWeight:'bolder',
        fontStyle:'Italic'
    }
}))
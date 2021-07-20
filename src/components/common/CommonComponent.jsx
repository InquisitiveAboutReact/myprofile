import { useStyles } from "../HeaderComponent/HeaderStyles";
import { Box , Grid, Typography} from "@material-ui/core";
import InfoSharpIcon from '@material-ui/icons/InfoSharp';
import ArrowDownwardSharpIcon from '@material-ui/icons/ArrowDownwardSharp';
import { useStyles as BodyStyle} from '../BodyComponent/BodyStyle'


export const Decorator = ({label, withIcon,Icon, styles})=> {
    const classes = useStyles();
    return (
        <Box className={classes.decorator} style={styles}>
          <Typography className={classes.decoratorText} variant='span' component="h4">
            <InfoSharpIcon /> Click here to know more about me <ArrowDownwardSharpIcon />
          </Typography>
        </Box>
    )
}

export const Divider = ()=> {
  const classes = BodyStyle();
  return (
    <Typography variant="span" className={classes.divider}>

    </Typography>
  )
}

export const RenderSectionTitle = ({heading, description, alignCenter})=> {
  const classes = BodyStyle();
  return <Box className={classes.sectionHeadingContainer}>
 <Typography variant="h4" align={alignCenter ? "center":"left"} className={classes.sectionHeading}>{heading}</Typography>
  {Divider()}
  <Typography variant="body1" align={alignCenter ? "center":"left"}  component="h6" className={classes.sectionDesc}>{description}</Typography>
  </Box>
 
}

export const CardMedia = ()=> {
  <Grid container>
    <Grid item xs={4}>

    </Grid>
    <Grid item xs={8}>

    </Grid>
  </Grid>
}
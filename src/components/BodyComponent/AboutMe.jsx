import { Box , Container, Grid, Hidden, Typography} from '@material-ui/core'
import React from 'react'
import { useStyles } from './BodyStyle';
import Image from "../../images/techcover.jpg"
import { RenderSectionTitle } from '../common/CommonComponent';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

function AboutMe() {
    const classes = useStyles({
        root: {
            maxWidth: 345,
          },
          media: {
            height: 140,
          },
    });
    return (
        <Box className={classes.section} id="Github">
        <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
          <Typography variant="h4" className={classes.intro}>
            A little bit about myself
        </Typography>
        <hr className={classes.horizontalStyle}/>
              {RenderSectionTitle(
                  {
                heading:'A person who is always ready to work on open source technologies',
                description:'Technology Stacks'
                })}
          <Typography className={classes.techstack}>
              <li>React, Redux, Zustand</li>
              <li>Node,Express,Next</li>
              <li>Material UI, React Styled Component, Bootstrap</li>
              <li>Server Side Rendering </li>
              <li>CI/CD</li>
              <li>GIT, Heroku</li>
          </Typography>
          <br />
          <Typography variant="h5" component="p" className={classes.certificationHeading}>Certifications</Typography>
          <Typography className={classes.certification}>
              <li>AZ-300 – Azure Architect Technologies(2020)</li>
              <li>ITIL® Foundation Certificate in IT Service Management (2015)</li>
              <li>LOT-959 - IBM WebSphere Portal 6.1 Application Developments Certified(2011)</li>
          </Typography>
          
          </Grid>
          <Grid item sm={5}>
              {/* <img src={image} alt="about" className={classes.responsiveImg}/> */}
              <Typography variant="h4" className={classes.intro}>
            Sample Of My Work
            </Typography> <br />
            <Typography variant="h6" className={classes.introdesc}>
            Click on my github repo at the top to explore more about my work<br />
            </Typography>
            <br />
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Image}
          title="Server Side Rendering"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Server Side Rendering
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            This app articulates how can we enable SSR using Express JS. SSR is faster to load than a CSR. <br /> 
            You can test the application from Browser network tab after deploy the application in Express JS as well as 
            in React web server (CSR)
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         <a href="https://github.com/InquisitiveAboutReact/SSR-NextJS-Heroku" target="_blank"><GitHubIcon /> </a>
        </Button>
      </CardActions>
    </Card>
    <br /> <br />
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Image}
          title="Webpack"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            React+Webpack+CSR+SSR
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
          End to End Server Side and Client Side rendering configuration of a simple react app using Express framework and Webpack 5 from scratch. <br/>
          The app can be simultaneously run in both client side and server side.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         <a href="https://github.com/InquisitiveAboutReact/SSR-CSR-Express-Webpack-React" target="_blank"><GitHubIcon /> </a>
        </Button>
      </CardActions>
    </Card>
            
          </Grid>
        </Grid>
        </Container>
        </Box>
    )
}

export default AboutMe

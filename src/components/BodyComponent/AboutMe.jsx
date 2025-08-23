import { Box , Container, Grid, Typography} from '@material-ui/core'
import React from 'react'
import { useStyles } from './BodyStyle';
import Image from "../../images/techcover.jpg"
import { RenderSectionTitle } from '../common/CommonComponent';
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
                heading:'A person who is always ready to work on any open source technologies',
                description:'Technolog Stacks'
                })}
          <Typography className={classes.techstack}>
              <li>End to End Service Delivery Management </li>
              <li><strong>Currently learning Salesforce(Admin, Service Cloud, Apex, Triggers, LWC )</strong></li>
              <li>UI programming and Framework - HTML5, Bootstrap, CSS3, SCSS</li>
              <li>Java Script Library and Framework - React JS, Redux, Justand, Angular 2/5, VUE JS</li>
              <li>Back End & SSR - Node, Express JS, Next JS </li>
              <li>Task runner build tools - NPM, Yarn, Webpack 5.x </li>
              <li>CI/CD  – VSTS, GIT, GIT Action, Source Tree, BitBucket </li> 
              <li>Deployment - UCD , Heroku, Netlify </li>
              <li>TDD - Jest / Karma / Jasmine / Mocha / Enzyme </li>
              <li>Cloud – Azure, Bluemix </li>
              <li>Agile and KANBAN Tool – JIRA, MURAL </li>
              <li>NoSQL DB – Mongo </li>
              <li>Spring Boot & Eureka </li>
              <li>Products - Guidewire, ClaimCenter</li>
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
        <CardContent className={classes.mediaContent}>
          <Typography gutterBottom variant="h5" component="h2">
            Server Side Rendering
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p" style={{fontWeight:'bolder',fontFamily:'MS ui-sans-serif'}}>
            This app articulates how can we enable SSR using Express JS. SSR is faster to load than a CSR. <br /> 
            You can test the application from Browser network tab after deploy the application in Express JS as well as 
            in React web server (CSR)
            My current interests areas / studies / research is on Claude AI, React + Blockchain Integration, Web3 , dAPP, GenAI.
Recently, had hands-on experience integrating chatbot (free) in my personal website (currently not deployed in the production as it’s under training & testing phase). Also, working on integrating Ollama for real time AI enabled responses.

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         <a href="https://github.com/InquisitiveAboutReact/SSR-NextJS-Heroku" target="_blank" rel="noopener noreferrer"><GitHubIcon /> </a>
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
          <Typography variant="body2" color="textPrimary" component="p" style={{fontWeight:'bolder',fontFamily:'MS ui-sans-serif'}}>
          End to End Server Side and Client Side rendering configuration of a simple react app using Express framework and Webpack 5 from scratch. <br/>
          The app can be simultaneously run in both client side and server side.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         <a href="https://github.com/InquisitiveAboutReact/SSR-CSR-Express-Webpack-React" target="_blank" rel="noopener noreferrer"><GitHubIcon /> </a>
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

import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import HomeImage from '../../images/HomePage1.jpg'

const styles = makeStyles({
  topImgContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
  },
  displayImg: {
    width: '100%',
  },
  middleBox: {
    flexGrow: 2,
    minWidth: '60%',
  },
  flexContainer: {
    display: 'flex',
    width: '100%',
  },
  pageHeader: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraphHeader: {
    fontSize: '1.5rem',
  },

  bodyImage: {
    maxWidth: '100%',
    maxHeight: 300,
  },
})

export const Home = () => {
  const classes = styles()
  return (
    <>
      <div className={`${classes.flexContainer} + ${classes.pageHeader}`}>
        <h1>Who Are We?</h1>
      </div>
      <div className={classes.flexContainer}>
        <div>
          <img src={HomeImage} className={classes.bodyImage}></img>
          <p>
            Welcome to Open Eugene. We are a Code for America Brigade located in Eugene, Oregon. We provide leadership
            and resources to help improve digital services for community engagement and access to local government
            programs. We are civic-minded tech and design enthusiasts and we are always looking for more projects and
            contributors. Feel free to work on your own project or jump into one in progress.
          </p>
          <p className={classes.paragraphHeader}>Have a project?</p>
          <p>We eagerly accept new projects. Please reach out to us via social media.</p>
        </div>
      </div>
    </>
  )
}

export default Home

import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'

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

    </>
  )
}

export default Home

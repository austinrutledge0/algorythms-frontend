import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import algorythmsLogo from '../../images/algorythmsLogo.png'
import SideBarLink from './SideBarLink'

const styles = makeStyles({
  topImgContainer: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
  },
  bodyImage: {
    maxWidth: '100%',
    maxHeight: 300,
  },
  sidebar: {
    height: '100vh',
    width: '15vw',
    fontFamily: 'Syne Mono',
    background: '#16697a',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  middleLinksSection: {
    paddingTop: 0,
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
  },
  bottomLinksSection: {
    paddingTop: 0,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  logoImageContainer: {
    paddingTop: 30,
    flex: 1,
  },

  logoImage: {
    maxWidth: '50%',
    marginBottom: 0,
  },
})

export const SideBar = () => {
  const classes = styles()
  return (
    <>
      <div className={classes.sidebar}>
        <div className={classes.logoImageContainer}>
          <img src={algorythmsLogo} className={classes.logoImage}></img>
        </div>

        <div className={classes.middleLinksSection}>
          <SideBarLink link={'/'} linkTitle={'Products'}></SideBarLink>
          <SideBarLink link={'/'} linkTitle={'Products'}></SideBarLink>
          <SideBarLink link={'/'} linkTitle={'Products'}></SideBarLink>
        </div>

        <div className={classes.bottomLinksSection}>
          <SideBarLink link={'/'} linkTitle={'Settings'}></SideBarLink>
          <SideBarLink link={'/'} linkTitle={'Questions?'}></SideBarLink>
        </div>
      </div>
    </>
  )
}

export default SideBar

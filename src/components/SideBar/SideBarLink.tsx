import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import algorythmsLogo from '../../images/algorythmsLogo.png'

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

  body: {
    margin: 0,
    background: '#ecf0f1',
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

  item: {
    color: 'white',
    fontSize: '20px',
    padding: '10px 20px',
    textDecoration: 'none',
    '&:hover': {
      color: '#ffa62b',
    },
  },
  middleLinksSection: {
    paddingTop: 0,
    flex: 2,
  },
  bottomLinksSection: {
    paddingTop: 0,
    flex: 1,
  },

  section: {
    marginTop: 0,
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
interface SideBarLinkProps {
  linkTitle: string
  link: string
}

export const SideBarLink = ({ linkTitle, link }: SideBarLinkProps) => {
  const classes = styles()
  return (
    <>
      <a href={link} className={classes.item}>
        {linkTitle}
      </a>
    </>
  )
}

export default SideBarLink

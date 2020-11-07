import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
// @ts-ignore
import { SocialIcon } from 'react-social-icons'

const styles = makeStyles({
  footerStyle: {
    background: 'linear-gradient(to right, #00ff6d, #00faff)',
    display: 'block',
    padding: '10px',
  },
  socialMediaIconsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialMediaIcons: {
    margin: 2.5,
    '.social-svg-icons': {
      color: 'white',
    },
  },
  socialMediaTitle: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
})

export const Footer = () => {
  const classes = styles()

  return (
    <div>
      <div className={classes.footerStyle}>
        <p className={classes.socialMediaTitle}>Social Media</p>
        <div className={classes.socialMediaIconsContainer}>
          <SocialIcon url="https://www.facebook.com/openeugene" className={classes.socialMediaIcons} />
          <SocialIcon url="https://twitter.com/open_eugene" className={classes.socialMediaIcons} />
          <SocialIcon url="https://github.com/OpenEugene" className={classes.socialMediaIcons} />
        </div>
      </div>
    </div>
  )
}

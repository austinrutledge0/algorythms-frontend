import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'


const styles = makeStyles({
    reward: {
        width: "32.25%",
        borderLeft: "solid 0px transparent",
        borderRight: "solid 0px transparent",
        borderBottom: "solid 0px transparent",
        boxShadow: "0 0 5px #333",
        margin: 5
    },
    "@media (max-width: 600px)": {
        reward: {
            width: "100%",
            marginBottom: 25
        }
    },
    rewardImage: {
        width: "100%",
        borderBottom: "solid 1px #333",
        maxHeight: "50%"
    },
    rewardDescription: {
        maxHeight: "50%",
        margin: 5
    }
});

export interface RewardProps
{
    rewardName: string,
    imageUrl: string,
    rewardPointCost: number
}

export const Reward = ({rewardName, imageUrl, rewardPointCost}: RewardProps) => {
  const classes = styles()
  return (
      <div className={classes.reward}>
          <img src={imageUrl} className={classes.rewardImage} />
          <div className={classes.rewardDescription}>
              <h3>{rewardName}</h3>
              <p>{rewardPointCost}</p>
          </div>
      </div>
  )
}

export default Reward

import React, { useEffect, useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import axios from "axios";
import { GetAllRewardsApiResponse, Reward } from "../../../types/types";
import { Reward as RewardTile } from "../../UnauthenticatedApp/Products/Reward";

const styles = makeStyles({
  rewardsContainer: {
    display: "flex",
    flexWrap: "wrap"
  },
});


export const Rewards = () => {
  const classes = styles();

  const [rewards, setRewards] = useState<Reward[]>();

  useEffect(() => {
    const getRewards = async () => {
      const data = await axios.get(
        `${process.env.REACT_APP_BASE_ROOT_URL}/rewards`,
        {}
      );
      const allProducts: Reward[] = data.data.allRewards;
      console.log("allrewards " + JSON.stringify(allProducts));
      //setRewards(allProducts)
      setRewards(allProducts);
    };
    getRewards();
  }, []);

  return (
    <div className={classes.rewardsContainer}>
      {rewards?.map((reward, i) => (
        //  <p>{reward.rewardimagename + reward.rewardname + reward.pointcost}</p>
         <RewardTile key={i} imageUrl={reward.rewardimagename ? reward.rewardimagename : ""} rewardName={reward.rewardname} rewardPointCost={reward.pointcost} rewardDescription={reward.rewarddescription}/>
      ))}
    </div>
  );
};

export default Rewards;

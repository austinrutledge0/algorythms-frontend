import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Card} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import RewardDetailsModal from "../../Modals/RewardDetailsModal";

const styles = makeStyles({
  reward: {
    width: "32.25%",
    borderLeft: "solid 0px transparent",
    borderRight: "solid 0px transparent",
    borderBottom: "solid 0px transparent",
    boxShadow: "0 0 5px #333",
    margin: 5,
  },
  "@media (max-width: 600px)": {
    reward: {
      width: "100%",
      marginBottom: 25,
    },
  },
  rewardImage: {
    width: "100%",
    borderBottom: "solid 1px #333",
    maxHeight: "50%",
  },
  rewardDescription: {
    maxHeight: "50%",
    margin: 5,
  },
});

export interface RewardProps {
  rewardName: string;
  imageUrl: string;
  rewardPointCost: number;
  rewardDescription: string;
}

export const Reward = ({
  rewardName,
  imageUrl,
  rewardPointCost,
                         rewardDescription
}: RewardProps) => {
  const classes = styles();
  const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);
  const handleCloseDetailModal = () => {
    setIsDetailModalOpen(false)
  }
  const handleOpenDetailModal = () => {
    setIsDetailModalOpen(true)
  }
  return (
      <>

        <RewardDetailsModal open={isDetailModalOpen} handleClose={handleCloseDetailModal} rewardDescription={rewardDescription} rewardName={rewardName}/>


      <Card className={classes.reward} onClick={handleOpenDetailModal}>
        <CardActionArea>
          <CardMedia
              style={{height: 250}}
              image={`./productImages/${imageUrl}.jpg`}
              title={rewardName}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {rewardName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {rewardPointCost}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
      </Card>
        </>
  );
};

export default Reward;

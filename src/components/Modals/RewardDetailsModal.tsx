import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
        // height: '100vh',
        // width: '15vw',
        width: '20%',
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
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        border: '2px solid #000',
    },
})

export interface RewardDetailsModalProps {
    open: boolean;
    handleClose: () => void;
    rewardDescription: string;
    rewardName: string;
}


export const RewardDetailsModal = ({open, handleClose, rewardDescription, rewardName}: RewardDetailsModalProps) => {
    const classes = styles()
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div style={{backgroundColor:"white", width: "25%", display: 'flex', alignItems: "center", flexDirection:"column"}}>
                    <h2 id="transition-modal-title">{rewardName}</h2>
                    <p id="transition-modal-description">{rewardDescription}</p>
                </div>
            </Fade>
        </Modal>
    )
}

export default RewardDetailsModal

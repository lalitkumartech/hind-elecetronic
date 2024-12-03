
import { Box, Grid,} from '@mui/material';
import { makeStyles,Modal,Backdrop,Fade} from "@material-ui/core";
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    img: {
          flexWrap: "nowrap",
        transform: "translateZ(0)"
    },
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
            backgroundcolor: "red"
        }
    },
    img: {
        outline: "none"
    }
}));

function GalleryImages(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [img, setImage] = useState("false");

    const handleClose = () => {
        setOpen(false);
    };

    const handleImage = (valu) => {
        setImage(valu);
        setOpen(true);
        console.log(img);
    };
    return (
        <>
            <Grid lg={4} md={4} xs={12} sx={{ p: 2 }}>
                <Box className="gallery_image_box">
                    <img src={props.img} alt='gallery image' style={{width: '100%', height: '300px', cursor:"pointer"}} onClick={()=>{handleImage(props.img)}}/>
                </Box>
                <Modal
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500
                        }}
                    >
                        <Fade in={open} timeout={500} className={classes.img}>
                            <img
                                src={props.img}
                                alt="asd"
                                style={{ maxHeight: "90%", maxWidth: "90%" }}
                            />
                        </Fade>
                    </Modal>
            </Grid>
        </>
    )
};


export default GalleryImages;
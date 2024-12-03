
import { Box, Container, Grid, Typography } from "@mui/material";
import GalleryData from '../Landing-page/WhyChooseData';
import { makeStyles,Modal,Backdrop,Fade} from "@material-ui/core";
import React, { useState } from "react";
import GalleryImages from "./GalleryImages";





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


function GallerySecOne() {


    


    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [img, setImage] = useState("false");

    const handleClose = () => {
        setOpen(false);
    };

    const handleImage = (valu) => {
        alert(valu)
        setImage(valu);
        setOpen(true);
        console.log(img);
    };

    return (
        <>
            <Box className="whychoose-sec">
                <Container>
                    <Grid Container>
                        <Box className="whychoose_heading">
                            <Typography variant="h2">Gallery</Typography>
                            <Typography>Problems trying to resolve the conflict between<br />
                                the two major realms of Classical physics: Newtonian mechanics </Typography>
                        </Box>
                    </Grid>

                    <Grid container>
                        <Box className="whychoose_card" sx={{ width: '100%' }}>
                            {/* <Typography className="heading-text" sx={{textAlign: 'center'}} variant="h2">Where does it come from?</Typography> */}
                        </Box>
                        <Grid container>

                            {GalleryData.GalleryData.map((valu) => {
                                return (<>
                                    <GalleryImages
                                        key={valu.id}
                                        img={valu.img}
                                        // src={tile.img}
                                        // alt={tile.title}
                                        // onClick={() => handleImage(valu.img)}
                                         
                                        className="img"
                                        //style={{ width: "100%", height: "300px", cursor }}
                                       
                                    />


                                    

                    </>    )
                            }
                            )}
                          
     
  
                        </Grid>
                    </Grid>



                    




                </Container>
            </Box>
        </>

    )
};

export default GallerySecOne;
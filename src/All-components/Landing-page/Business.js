import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


function Business() {
    return (
        <>
            <Box className="business-sec">
                <Container >
                    <Grid Container>
                        <Box className="whychoose_heading">
                            <Typography variant="h2">We are providing best<br />
                                business service.</Typography>
                            <Typography>Problems trying to resolve the conflict between<br />
                                the two major realms of Classical physics: Newtonian mechanics </Typography>
                        </Box>
                    </Grid>
                </Container>
                <Box className="business_video_sec">
                    <Grid container sx={{display: 'flex', justifyContent: 'center'}}>
                        <Grid lg={8} md={8} xs={10} >
                            <Box>
                                <img className="business_image" style={{width: "100%"}} src="/images/bussiness-image.jpg"/>
                                <IconButton className="play_icon">
                                    <PlayArrowIcon style={{fontSize:"30px"}}/>
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>
                    </Box>
            </Box>
            
        </>
    );
};

export default Business;
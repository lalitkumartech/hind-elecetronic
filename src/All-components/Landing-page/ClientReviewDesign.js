import StarIcon from '@mui/icons-material/Star';
import { Box, Card, Grid, IconButton, Typography } from '@mui/material';
import StarHalfIcon from '@mui/icons-material/StarHalf';


function ClientReviewDesign(props) {
    return (
        <>
            <Grid lg={4} md={4} xs={12} sx={{ p: 2 }}>
                <Card className="client_row">
                    <Box className="client_rating">
                        <IconButton>
                            <StarIcon />
                        </IconButton>
                        <IconButton>
                            <StarIcon />
                        </IconButton>
                        <IconButton>
                            <StarIcon />
                        </IconButton>
                        <IconButton>
                            <StarHalfIcon />
                        </IconButton>
                    </Box>

                    <Typography className='client_subtext'>{props.revietext}</Typography>
                    <Box className="client_detail" sx={{ display: 'flex', alignItems: "center" }}>
                        <img src={props.clientimage} alt='client image' />
                        <Box className="client_name_detail">
                            <Typography>{props.clientname}</Typography>
                            <Typography style={{ color: "#000" }}>{props.profile}</Typography>
                        </Box>
                    </Box>
                </Card>
            </Grid>
        </>
    );
};

export default ClientReviewDesign;
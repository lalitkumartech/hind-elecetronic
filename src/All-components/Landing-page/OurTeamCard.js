import { Box, Card, Grid, IconButton, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useNavigate } from "react-router-dom";



function OurTeamCard(props) {

    
     const navigate = useNavigate();
     const handleClick = () =>{
        if(props?.valu?.categorie === "water-pumps"){
            navigate('/categories')
        }
        //
     }

    return (
        <>
            <Grid lg={4} md={4} xs={12} sx={{ p: 2 }}>
                <Card className="ourteam_row" sx={{cursor: 'pointer'}} onClick={()=>handleClick()}>
                    <img style={{width: "100%"}} src={props.teamimage} alt="ourteam image" />
                    <Box className="ourteam_details">
                        <Typography variant="h5">{props.teamname}</Typography>
                        <Typography variant="h6">{props.profilename}</Typography>
                        {/* <Box>
                            <IconButton className="team_social_icon">
                              <FacebookIcon/>                           
                            </IconButton>
                            <IconButton className="team_social_icon">
                             <InstagramIcon/>
                            </IconButton>
                            <IconButton className="team_social_icon">
                             <TwitterIcon/>
                            </IconButton>
                        </Box> */}
                    </Box>
                </Card>
            </Grid>
        </>
    );
};


export default OurTeamCard;
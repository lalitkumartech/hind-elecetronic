import { Box, Container, Grid, Typography } from "@mui/material";
import OurTeamCard from "./OurTeamCard";
import OurteamData from "./WhyChooseData";



function Ourteam() {
    return (
        <>
            <Box className="ourteam-sec">
                <Container>
                    <Grid Container>
                        <Box className="whychoose_heading">
                            <Typography variant="h2">Meet Our Team</Typography>
                            <Typography>Problems trying to resolve the conflict between<br />
                                the two major realms of Classical physics: Newtonian mechanics </Typography>
                        </Box>
                    </Grid>

                    <Grid container className="whychoose_card">

            {OurteamData.OurteamData.map((valu) => {
              return (
                <OurTeamCard
                  key={valu.id}
                  teamimage={valu.teamimage}
                  teamname={valu.teamname}
                  profilename={valu.profilename}
                  valu={valu}
                />
              );
            })}

            </Grid>


                </Container>
            </Box>

        </>
    );
};


export default Ourteam;
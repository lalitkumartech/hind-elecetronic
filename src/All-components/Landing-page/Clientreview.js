import { Box, Container, Grid, Typography } from "@mui/material";
import ClientData from "../Landing-page/WhyChooseData";
import Whychooselist from "./Whychooselist";
import ClientReviewDesign from "../Landing-page/ClientReviewDesign";


function Clientreview() {
  return (
    <>
      <Box className="business-sec">
        <Container>
          <Grid Container>
            <Box className="whychoose_heading clientreview_heading">
              <Typography variant="h2">What Clients Say</Typography>
              <Typography>Problems trying to resolve the conflict between<br />
                the two major realms of Classical physics: Newtonian mechanics </Typography>
            </Box>
          </Grid>

          <Grid container className="whychoose_card">

            {ClientData.ClientData.map((valu) => {
              return (
                <ClientReviewDesign
                  key={valu.id}
                  revietext={valu.revietext}
                  clientimage={valu.clientimage}
                  clientname={valu.clientname}
                  profile={valu.profile}
                />
              );
            })}

          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Clientreview;
import { Avatar, Box, Card, CardHeader, CardMedia, Container, Grid, IconButton, List, ListItem, ListItemText, ListSubheader, Typography } from "@mui/material";

import Whychooselist from "../Landing-page/Whychooselist";
import WhyChooseData from "../Landing-page/WhyChooseData";


function WhyChoose() {
  return (
    <>
      <Box className="whychoose-sec">
        <Container>
          <Grid Container>
            <Box className="whychoose_heading">
              <Typography variant="h2">WHY CHOOSE US</Typography>
              <Typography>Problems trying to resolve the conflict between<br />
                the two major realms of Classical physics: Newtonian mechanics </Typography>
            </Box>
          </Grid>

          <Grid container className="whychoose_card">
         
            {WhyChooseData?.WhyChooseData.map((valu) => {
                    return (
                      <Whychooselist
                        key={valu.id}
                        cardimg={valu.cardimg}
                        cardtitle={valu.cardtitle}
                        list1={valu.list1}
                        list2={valu.list2}
                        list3={valu.list3}
                        list4={valu.list4}
                        list5={valu.list5}
                      />
                    );
                  })}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default WhyChoose;
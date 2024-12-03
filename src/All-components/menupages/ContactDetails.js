import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";


export default function ContactDetails() {
    return (
        <>
            <Box className="whychoose-sec">
                <Container>
                    <Grid Container>
                        <Box className="whychoose_heading">
                            <Typography variant="h2">Contact US</Typography>
                            <Typography>Problems trying to resolve the conflict between<br />
                                the two major realms of Classical physics: Newtonian mechanics </Typography>
                        </Box>
                    </Grid>

                    <Grid container className="contact_box">
                        <Grid lg={6} md={6} xs={12}>
                            <Box className="contact_details">
                                <TextField id="outlined-name" fullWidth sx={{ m: 1, }} label="Name" variant="outlined" />
                                <TextField id="outlined-email" fullWidth sx={{ m: 1, }} label="Email" variant="outlined" />
                                <TextField id="outlined-number" fullWidth sx={{ m: 1, }} label="Phone Number" variant="outlined" />
                                <TextField id="outlined-query" fullWidth sx={{ m: 1, }} label="Description" variant="outlined" />
                            </Box>
                            <Box className="contact_button" >
                              <Button variant="contained">submit</Button>
                            </Box>
                        </Grid>
                        
                        
                    </Grid>
                </Container>
            </Box>
        </>
    )
};
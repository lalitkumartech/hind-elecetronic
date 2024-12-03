import { Box, Button, Container, Grid, Typography } from "@mui/material";


function Consulting() {
    return (
        <>
            <Box className="consulting-sec">
                <Container>
                    <Grid container >
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                                <Box className="consulting_heading">
                                    <Typography variant="h3">Consulting Agency For Your Business</Typography>
                                    <Typography>the quick fox jumps over the lazy dog</Typography>
                                </Box>
                                <Box>
                                    <Button variant="contained" className="banner-form book-button">Contact Us</Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Consulting;
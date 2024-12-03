import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, TextareaAutosize, Typography, styled } from "@mui/material";
import React from "react";


const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    background: 'transparent',
    border: '0xp',
    boxShadow: 'none'
}));

function Appoinment() {

    const [age, setAge] = React.useState('');
    const [happy, setHappy] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleChangeh = (event) => {
        setHappy(event.target.value);
    };


    return (
        <>
            <Box className="appoinment_sec">
                <Container>
                    <Grid container >
                        <Grid item xs={12} md={6} lg={7}>
                            <Item>
                                <Box className="appoinment_box">
                                    <Box className="appoinment_heading">
                                        <Typography variant="h5">Contact Us</Typography>
                                        <Typography variant="h2">Make an <br />Appointment</Typography>
                                    </Box>

                                    <FormControl className="appoinment_form">
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <TextField id="outlined-basic" label="Full Name" variant="outlined" sx={{mr:1}} />
                                            <TextField id="outlined-basic" label="example@gmail.com" variant="outlined"  sx={{ml:1}} />
                                        </Box>
                                        <Box className="appoinment_select_optn">
                                            <FormControl fullWidth sx={{mr:1}}>
                                                <InputLabel id="demo-simple-select-label">Please Select</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    label="Please Select"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>1</MenuItem>
                                                    <MenuItem value={20}>2</MenuItem>
                                                    <MenuItem value={30}>3</MenuItem>
                                                </Select>
                                            </FormControl>

                                            <FormControl fullWidth sx={{ml:1}}>
                                                <InputLabel id="demo-simple-select-label-time">4:00 Available</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label-time"
                                                    id="demo-simple-select-time"
                                                    value={happy}
                                                    label="4:00 Available"
                                                    onChange={handleChangeh}
                                                >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </FormControl>

                                        </Box>
                                        <TextareaAutosize minRows={2} style={{height: "140px",background: 'transparent', border: "1px solid #ccc"}} variant="outlined" label="Message" />
                                        
                                    </FormControl>
                                    <Box sx={{textAlign: 'left'}}>
         <Button variant="contained" className="banner-form book-button">Book Appointment</Button>
        </Box>
                                </Box>
                            </Item>
                        </Grid>
                        {/* <Grid item xs={12} md={6} lg={5} sx={{}}>
                            <Item></Item>
                        </Grid> */}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};


export default Appoinment;
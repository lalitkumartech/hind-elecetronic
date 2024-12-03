import { Box, Button, Container, FormControl, FormLabel, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography, styled } from "@mui/material";
import Paper from '@mui/material/Paper';
import "../../style.css";
import { Label } from "@mui/icons-material";
import React from "react";

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    background: 'transparent',
    border: '0xp',
    boxShadow: 'none'
}));


function Banner() {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    }
    return (
        <>
            <Container maxWidth="lg" >
                <Grid container spacing={2} className="banner_row">
                    <Grid item lg={8} md={8} xs={12} sx={{display: 'flex', alignItems: 'center'}}>
                        <Item>
                            <Grid className="banner_sec">
                                <Typography variant="h1" className="banner_heading">Drive More<br /> Customers<br />Through Digital</Typography>
                                <Typography className="banner_prgph" variant="h4">We know how large objects will act, but things on a<br/> small scale.</Typography>
                                <Stack spacing={2} direction="row">
                                    <Button variant="contained" className="banner_button" sx={{ borderRadius: '30px', padding: '12px 20px' }}>Get Quote Now</Button>
                                    <Button variant="outlined" className="banner_button_two" sx={{ borderRadius: '30px', padding: '12px 20px' }}>Learn More</Button>
                                </Stack>
                            </Grid>
                        </Item>
                    </Grid>
                    <Grid item lg={4} md={4} xs={12}>
                        <Item>
                            <Grid className="banner_form">
                            <Typography variant="h3">Book Appointment</Typography>
                            <FormControl className="banner-form-box" sx={{width: '100%'}}>
                              <FormLabel sx={{paddingTop: '12px',paddingBottom: '5px'}}>Name</FormLabel>
                              <TextField id="outlined-basic" label="Full Name" variant="outlined" />
                              <FormLabel sx={{paddingTop: '12px',paddingBottom: '5px'}}>Email</FormLabel>
                              <TextField id="outlined-basic" label="example@gmail.com" variant="outlined" />
                              <FormLabel sx={{paddingTop: '12px',paddingBottom: '5px'}}>Department *</FormLabel>
                              <InputLabel id="demo-simple-select-label_department"></InputLabel>
        <Select
          labelId="demo-simple-select-label_department"
          id="demo-simple-select1"
        //  value={age}
        //   label="Age"
          onChange={handleChange}
        >
          <MenuItem value={1}>Ten</MenuItem>
          <MenuItem value={2}>Twenty</MenuItem>
          <MenuItem value={3}>Thirty</MenuItem>
        </Select>

        <FormLabel sx={{paddingTop: '12px',paddingBottom: '5px'}}>Time *</FormLabel>
                              <InputLabel id="demo-simple-select-label_time"></InputLabel>
        <Select
          labelId="demo-simple-select-label_time"
          id="demo-simple-select2"
         value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={4}>4:00 Available</MenuItem>
          <MenuItem value={5}>Twenty</MenuItem>
          <MenuItem value={6}>Thirty</MenuItem>
        </Select>

        
                              
                            </FormControl>
                            <Box sx={{textAlign: 'center'}}>
         <Button variant="contained" className="banner-form book-button">Book Appointment</Button>
        </Box>
                            </Grid>
                        </Item>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Banner;
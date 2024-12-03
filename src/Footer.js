import { Box, Container, Grid, IconButton, InputBase, List, ListItem, ListItemText, Typography, alpha, styled } from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Input } from "@mui/joy";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


function Footer() {
    return (
        <>
            <Box className="footer_sec">
                <Container>
                    <Grid container>
                        <Box className="footer_logo_sec" fullWidth>
                            {/* <img src="" alt="footer logo" /> */}
                            <Typography>Sprivaten</Typography>
                            <Box className="footer_social_icon">
                                <IconButton className="footer_social_icon" style={{ color: "#335BF5" }}>
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton className="footer_social_icon" style={{ color: "#E51F5A" }}>
                                    <InstagramIcon />
                                </IconButton>
                                <IconButton className="footer_social_icon" style={{ color: "#21A6DF" }}>
                                    <TwitterIcon />
                                </IconButton>
                                <IconButton className="footer_social_icon" style={{ color: "#E42F08" }}>
                                    <YouTubeIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid container className="footer_list_box">
                        <Grid lg={2} md={2} xs={12}>
                            <Box className="footer_list">
                                <Typography variant="h5">Company Info</Typography>
                                <List>
                                    <ListItem>
                                        <ListItemText className="footer-list_item">About Us</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText className="footer-list_item">Carrier</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText className="footer-list_item">We are hiring</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText className="footer-list_item">Blog</ListItemText>
                                    </ListItem>
                                </List>
                            </Box>
                        </Grid>
                        <Grid lg={2} md={2} xs={12}>
                            <Box className="footer_list">
                                <Typography variant="h5">Legal</Typography>
                                <List>
                                    <ListItem>
                                        <ListItemText className="footer-list_item">About Us</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText className="footer-list_item">Carrier</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText className="footer-list_item">We are hiring</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText className="footer-list_item">Blog</ListItemText>
                                    </ListItem>
                                </List>
                            </Box>
                        </Grid>
                        <Grid lg={2} md={2} xs={12}>
                            <Box className="footer_list">
                                <Typography variant="h5">Features</Typography>
                                <List>
                                    <ListItem>
                                        <ListItemText className="footer-list_item">Business Marketing</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText className="footer-list_item">User Analytic</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText className="footer-list_item">Live Chat</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText className="footer-list_item">Unlimited Support</ListItemText>
                                    </ListItem>
                                </List>
                            </Box>
                        </Grid>
                        <Grid lg={2} md={2} xs={12}>
                            <Box className="footer_list">
                                <Typography variant="h5">Resources</Typography>
                                <List>
                                    <ListItem>
                                        <ListItemText className="footer-list_item">About Us</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText className="footer-list_item">Carrier</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText className="footer-list_item">We are hiring</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText className="footer-list_item">Blog</ListItemText>
                                    </ListItem>
                                </List>
                            </Box>
                        </Grid>

                        <Grid lg={4} md={4} xs={12}>
                            <Box className="footer_list">
                                <Typography variant="h5">Get In Touch</Typography>
                                <Search className="footer_subscribe_btn">
                                    <Input endDecorator={<Button>Subscribe</Button>} />
                                </Search>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Footer;
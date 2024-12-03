
import { Box, Button, Card, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";


function Whychooselist(props) {
    return (
        <>
          <Grid lg={4} md={4} xs={12} sx={{p: 2}}>
            <Card className="whycard_box">
                <Box className="card_header">
                    <img sx={{ with: '100%' }} src={props.cardimg} />
                    <Typography variant="h5">{props.cardtitle}</Typography>
                </Box>
                <Box>
                    <List className="whychooselist">

                        <ListItemText className="chooseitem">{props.list1}</ListItemText>
                        <ListItemText className="chooseitem">{props.list2}</ListItemText>
                        <ListItemText className="chooseitem">{props.list3}</ListItemText>
                        <ListItemText className="chooseitem">{props.list4}</ListItemText>
                        <ListItemText className="chooseitem">{props.list5}</ListItemText>
                        <Button className="list_button">Lear more</Button>
                    </List>

                </Box>
            </Card>
            </Grid>

        </>
    )
};

export default Whychooselist;



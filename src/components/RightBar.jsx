import { Box, Typography } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
];

const showLG = { xs: "none", lg: "block" };

const RightBar = ({ theme }) => {
  return (
    <Box
      sx={{
        minWidth: "512px",
        display: showLG,
        flexGrow: "auto",
        bgcolor: theme.palette.favColor.main,
        pl: 2,
      }}
      component="section"
      color="#FFF"
    >
      <Box sx={{ position: "fixed" }}>
        <Typography sx={{ fontWeight: 300 }} mt={2} variant="h6">
          Online Frinds
        </Typography>

        <AvatarGroup sx={{ justifyContent: "center", my: 2 }} total={24}>
          <Avatar
            sx={{ width: 49, height: 45 }}
            alt="Remy Sharp"
            src="https:/mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            sx={{ width: 49, height: 45 }}
            alt="Travis Howard"
            src="https:/mui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            sx={{ width: 49, height: 45 }}
            alt="Agnes Walker"
            src="https://mui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            sx={{ width: 49, height: 45 }}
            alt="Trevor Henderson"
            src="https:/mui.com//static/images/avatar/5.jpg"
          />
        </AvatarGroup>
        <Typography sx={{ fontWeight: 300 }} my={2} variant="h6">
          Lastest Photo
        </Typography>

        <ImageList
          gap={10}
          sx={{ width: 500, height: 160, overflowY: "hidden" }}
          cols={3}
          rowHeight={99}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                style={{ borderRadius: "5px" }}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography sx={{ fontWeight: 300 }} mb={1} mt={4} variant="h6">
          Lastest Conversation
        </Typography>

        <List
          sx={{ width: "100%", maxWidth: 488, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood "}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://mui.com/static/images/avatar/2.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could "}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris "}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;

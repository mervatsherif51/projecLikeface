import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
const Posts = () => {
  const myCards = [
    {
      letter: "A",
      color: "#4169e1",
      userName: "Shicko ElRayes",
      imgLink:
        "https://images.pexels.com/photos/12900917/pexels-photo-12900917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      letter: "N",
      color: "#500056",
      userName: "Hamada ElRayes",
      imgLink:
        "https://images.pexels.com/photos/12987114/pexels-photo-12987114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      letter: "M",
      color: "#008080",
      userName: "Mervat Mohamed",
      imgLink:
        "https://images.pexels.com/photos/13351559/pexels-photo-13351559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Organize Big Screen
  const renderMenu = (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
    </Menu>
  );

  const theme = useTheme();

  return (
    <Box component="main" sx={{ flexGrow: "3" }}>
      {myCards.map((item) => {
        return (
          <Card
            key={item.imgLink}
            sx={{ maxWidth: { xs: "90%", sm: 444 }, mx: "auto" }}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    color: theme.palette.getContrastText(item.color),
                    bgcolor: item.color,
                  }}
                  aria-label="recipe"
                >
                  {item.letter}
                </Avatar>
              }
              action={
                <IconButton onClick={handleClick} aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.userName}
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={item.imgLink}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />

              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>

              <Box flexGrow={1} />

              <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
            </CardActions>
          </Card>
        );
      })}

      {renderMenu}
    </Box>
  );
};

export default Posts;

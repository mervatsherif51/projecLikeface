import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import Modal from "@mui/material/Modal";

import DateRangeIcon from "@mui/icons-material/DateRange";
import {
  Avatar,
  Button,
  ButtonGroup,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

import { Stack } from "@mui/system";
import { EmojiEmotions } from "@mui/icons-material";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const AddPost = () => {
  const theme = useTheme();
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <>
      <Tooltip
        sx={{ position: "fixed", bottom: "35px", left: "35px" }}
        title="Add Post"
      >
        <Fab
          onClick={() => {
            setIsOpen(true);
          }}
          color="primary"
        >
          <AddIcon />
        </Fab>
      </Tooltip>

      {/* start Modal */}
      <Modal
        sx={{}}
        open={IsOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "22px",
            borderRadius: "6px",
            bgcolor: theme.palette.background.default,
            width: {xs: "95%", sm: 399},
          }}
        >
          <Typography
            sx={{ textAlign: "center", mb: 1 }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Create a Post
          </Typography>
          <Stack alignItems="center" direction="row">
            <Avatar
              sx={{ mr: "13px" }}
              src="https://mui.com/static/images/avatar/3.jpg"
            />

            <Typography variant="body1">Mervat Mohamed</Typography>
          </Stack>

          <TextField
            sx={{ width: "100%", mt: "22px" }}
            multiline
            maxRows={3}
            placeholder="What is in your mind ..."
            variant="standard"
          />

          <Stack direction={"row"} spacing={1} my={3}>
            <EmojiEmotions color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>

          <ButtonGroup
            sx={{ width: "100%" }}
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button sx={{ flexGrow: 1 }}>Post</Button>
            <Button>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default AddPost;

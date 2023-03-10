import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Stack,
  Divider,
  Box,
} from "@mui/material";
import AppBarr from "components/AppBar";
import { useMemo, useState } from "react";
import getDesignTokens from "styles/MyTheme";
import MyList from "components/List";
import Posts from "components/Posts";
import RightBar from "components/RightBar";
import AddPost from "components/AddPost";

function App() {
  const [mode, setmyMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const [showList, setshowList] = useState("none");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box className={theme.palette.mode}>
        <AppBarr showList={showList} setshowList={setshowList} />

        <Stack
          divider={<Divider orientation="vertical" flexItem />}
          sx={{ flexDirection: "row" }}
        >
          <MyList {...{ setmyMode, theme, showList, setshowList }} />

          <Posts />

          <RightBar theme={theme} />
        </Stack>
        {/* This Is button "+" */}

        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;

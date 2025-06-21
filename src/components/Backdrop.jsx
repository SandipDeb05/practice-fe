import { useSelector } from "react-redux";
import { commonBackdropSelector } from "../store/common/selector";
import { Backdrop as BackdropMUI, CircularProgress } from "@mui/material";

const Backdrops = () => {
  const isBackdropShown = useSelector(commonBackdropSelector);

  return (
    <BackdropMUI
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={isBackdropShown}
    >
      <CircularProgress color="inherit" />
    </BackdropMUI>
  );
};

export default Backdrops;

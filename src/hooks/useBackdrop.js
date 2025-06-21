import { useDispatch } from "react-redux";
import { toggleBackdrop } from "../store/common/actions";

const useBackdrop = () => {
  const dispatch = useDispatch();

  const showBackdrop = () => {
    dispatch(toggleBackdrop(true));
  };
  const hideBackdrop = () => {
    dispatch(toggleBackdrop(false));
  };

  return {
    showBackdrop,
    hideBackdrop,
  };
};

export default useBackdrop;

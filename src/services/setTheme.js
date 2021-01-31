import { useDispatch } from "react-redux";
import config from "../config";

export default function SetTheme(theme) {
  const dispatch = useDispatch();
  dispatch({
    type: "SET_THEME",
    payload: config(theme),
  });
}

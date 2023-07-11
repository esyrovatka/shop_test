import { useDispatch } from "react-redux";
import * as allAction from "../redux/actions";

export const useDispatchAction = () => {
  const dispatch = useDispatch();

  return Object.keys(allAction).reduce((acc, action) => {
    acc[action] = (...data) => dispatch(allAction[action](...data));
    return acc;
  }, {});
};

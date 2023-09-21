import { SET_INFOR } from "./Types";
export const setInformation = (infor) => {
  return {
    type: SET_INFOR,
    payload: infor,
  };
};

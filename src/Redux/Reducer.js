import { SET_INFOR } from "./Types";
const initialState = {
  infors: [],
};
const inforReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INFOR: {
      return {
        ...state,
        infors: [...state.infors, action.payload],
      };
    }
    default:
      return state;
  }
};
export default inforReducer;
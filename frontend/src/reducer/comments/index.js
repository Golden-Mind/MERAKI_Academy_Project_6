const initialState = {
  product: [],
  comment: [],
};
const commentesReducer = (state = initialState, { type, payload }) => {
  // action =  {type,payload} -> Destructure
  // return the new value for the initialState
  switch (type) {
    case "ADD_COMMENT":
      return { ...state, comment: [...state.comment, payload] };
    case "GET_COMMENT":
      return { ...state, comment: payload };
    default:
      return state.product;
  }
};
export default commentesReducer;

export const addComments = (comment) => {
  return { type: "ADD_COMMENT", payload: comment };
};
export const getComments = (comments) => {
  return { type: "GET_COMMENT", payload: comments };
};

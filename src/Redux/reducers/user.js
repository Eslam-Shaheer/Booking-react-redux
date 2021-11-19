export default function userReducer(state = [], action) {
  switch (action.type) {
    case "GET_USER_BY_ID":
      return { ...action.payload };
    case "UPDATE_USER":
      return { ...action.payload };
    case "DELETE_USER":
      return { ...action.payload };
    default:
      return state;
  }
}

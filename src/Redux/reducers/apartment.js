export default function apartmentReducer(state = [], action) {
  switch (action.type) {
    case "GET_APARTMENT":
      return { ...action.payload };
    case "GET_APARTMENT_BY_ID":
      return { ...action.payload };
    case "CREATE_BOOKING":
      return { ...action.payload };
    case "UPDATE_BOOKING":
      return { ...action.payload };
    case "DELETE_BOOKING":
      return { ...action.payload };
    case "DISPLAY_BOOKING":
      return { ...action.payload };
    case "GET_MESSAGE":
      return { ...action.payload };
    case "CREATE_MESSAGE":
      return { ...action.payload };
    case "UPDATE_MESSAGE":
      return { ...action.payload };
    case "DELETE_MESSAGE":
      return { ...action.payload };
    case "CREATE_REPLAY":
      return { ...action.payload };
    case "CREATE_REVIEW":
      return { ...action.payload };
    case "DISPLAY_REVIEW":
      return { ...action.payload };
    case "UPDATE_REIVEW":
      return { ...action.payload };
    case "DELETE_REVIEW":
      return { ...action.payload };
    default:
      return state;
  }
}

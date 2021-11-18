export default function hotelReducer(state = [], action) {
  switch (action.type) {
    case "GET_HOTELS":
      return { ...action.payload };
    case "GET_HOTEL_BY_ID":
      return { ...action.payload };
    default:
      return state;
  }
}

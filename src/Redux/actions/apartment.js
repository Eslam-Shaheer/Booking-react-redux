import { axiosInstance } from "../network";

localStorage.setItem(
  "authentication",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTcxNTFlNWUwNDlmZTFkNDU0YWU3NiIsImVtYWlsIjoic29tYWFAc29tYWEuY29tIiwidHlwZSI6ImFkbWluIiwiaWF0IjoxNjM3MjkxMzQxfQ.432rY5UoXoZV-yQAlb2wZyLRa0UgHsgWwIuytA3Tcrc"
);

export const getApartments = () => (dispatch) => {
  return axiosInstance.get("apartment").then((result) => {
    dispatch({ type: "GET_APARTMENT", payload: result.data });
  });
};

export const displayApartmentById = (apartmentId) => (dispatch) => {
  return axiosInstance.get("apartment/" + apartmentId).then((result) => {
    dispatch({ type: "GET_APARTMENT_BY_ID", payload: result.data });
  });
};

// Booking

// export const createBooking = (apartmentId, bookingObject) => (dispatch) => {
// console.log(bookingObject);
//   return axiosInstance
//     .post("apartment/booking/" + apartmentId,  bookingObject , {
//       headers : {authentication : localStorage.getItem("authentication")}
//     } )
//     .then((result) => {
//       dispatch({ type: "CREATE_BOOKING", payload: result.data });
//     }).catch(erorr =>console.log(erorr))
// };

export const updateBooking = (apartmentId, bookingId, bookingObject) => (dispatch) => {
   return axiosInstance
    .put("apartment/booking/" + apartmentId +'/'+ bookingId, bookingObject)
    .then((result) => {
      dispatch({ type: "UPDATE_BOOKING", payload: result.data });
     })
    .catch((erorr) => console.log(erorr));
};

export const deleteBooking = (apartmentId, bookingId,  ) => (dispatch) => {

    return axiosInstance
      .delete(
        "apartment/booking/" + apartmentId + "/" + bookingId,
          
        {
      headers: { authentication: localStorage.getItem("authentication") },
        }
      )
      .then((result) => {
        dispatch({ type: "DELETE_BOOKING", payload: result.data });
      })
      .catch((erorr) => console.log(erorr));

};

export const displayAllBookings =
  (apartmentId) => (dispatch) => {
     return axiosInstance
       .get("apartment/booking/" + apartmentId, {
         headers: { authentication: localStorage.getItem("authentication") },
       })
       .then((result) => {
         dispatch({ type: "DISPLAY_BOOKING", payload: result.data });
       })
       .catch((erorr) => console.log(erorr));
  };

// message

export const displayAllMessages = (apartmentId) => (dispatch) => {
  return axiosInstance
    .get("apartment/message/" + apartmentId, {
      headers: { authentication: localStorage.getItem("authentication") },
    })
    .then((result) => {
      dispatch({ type: "GET_MESSAGE", payload: result.data });
    });
};

// export const createMessage = (apartmentId, messageObject) => (dispatch) => {
//   return axiosInstance
//     .post("apartment/message/" + apartmentId, messageObject, {
//       headers: { authentication: localStorage.getItem("authentication") },
//     })
//     .then((result) => {
//       dispatch({ type: "CREATE_MESSAGE", payload: result.data });
//     });
// }; 

export const updateMessage = (apartmentId, messageId, messageObject) => (dispatch) => {
  return axiosInstance
    .put("apartment/message/" + apartmentId + "/" + messageId, messageObject, {
      headers: { authentication: localStorage.getItem("authentication") },
    })
    .then((result) => {
      dispatch({ type: "UPDATE_MESSAGE", payload: result.data });
    });
};

export const deleteMessage = (apartmentId, messageId ) => (dispatch) => {
  return axiosInstance
    .delete("apartment/message/" + apartmentId + "/" + messageId,    {
      headers: { authentication: localStorage.getItem("authentication") },
    })
    .then((result) => {
      dispatch({ type: "DELETE_MESSAGE", payload: result.data });
    });
};

export const createReplay = (apartmentId, messageId, replayObject) => (dispatch) => {
  return axiosInstance
    .post(
      "apartment/message/replay/" + apartmentId + "/" + messageId,
      replayObject,
      {
        headers: { authentication: localStorage.getItem("authentication") },
      }
    )
    .then((result) => {
      dispatch({ type: "CREATE_REPLAY", payload: result.data });
    });
};

//review

// export const createReview = (apartmentId, reviewObject) => (dispatch) => {
//   return axiosInstance
//     .post("apartment/review/" + apartmentId, reviewObject, {
//       headers: { authentication: localStorage.getItem("authentication") },
//     })
//     .then((result) => {
//       dispatch({ type: "CREATE_REVIEW", payload: result.data });
//     });
// };

// export const displayAllReviews = (apartmentId) => (dispatch) => {
//   return axiosInstance
//     .get("apartment/review/" + apartmentId, {
//       headers: { authentication: localStorage.getItem("authentication") },
//     })
//     .then((result) => {
//       dispatch({ type: "DISPLAY_REVIEW", payload: result.data });
//     });
// };

export const updateReview = (apartmentId, reviewId, reviewObject) => (dispatch) => {
  return axiosInstance
    .put("apartment/review/" + apartmentId + "/" + reviewId, reviewObject, {
      headers: { authentication: localStorage.getItem("authentication") },
    })
    .then((result) => {
      dispatch({ type: "UPDATE_REIVEW", payload: result.data });
    });
};

// export const deleteReview = (apartmentId, reviewId) => (dispatch) => {
//   return axiosInstance
//     .delete(
//       "apartment/review/" + apartmentId + "/" + reviewId,

//       {
//         headers: { authentication: localStorage.getItem("authentication") },
//       }
//     )
//     .then((result) => {
//       dispatch({ type: "DELETE_REVIEW", payload: result.data });
//     });
// };

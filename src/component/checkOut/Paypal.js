import { useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { propTypes } from "react-bootstrap/esm/Image";
import { axiosInstance } from "../../Redux/network";

// This values are the props in the UI
let amount;
const currency = "USD";
const style = { layout: "vertical" };
// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({
  currency,
  showSpinner,
  reservation,
  room,
  prop,
  info,
}) => {
  console.log(prop);
  amount = info.totalPrice;
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function () {
            axiosInstance
              .post("hotel/booking/" + prop._id + "/" + room._id, reservation)
              .then((result) => {
                console.log(result);
              });
          });
        }}
      />
    </>
  );
};

export default function App(props) {
  const reservation = {
    ...props.reservation,
    totalPrice: props.info.totalPrice - props.info.totalPrice * 0.17,
    startAt: props.info.startAt,
    endAt: props.info.endAt,
  };
  console.log(reservation);

  return (
    <div style={{ maxWidth: "750px", minHeight: "200px" }}>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AeNpjyX90THpGtncSaEYbZlxRrcXkM5o0MLbD8-1WPpVIgNL88yeVRhMqIJ6lPN5u7V1QFGHv6ol0J1X",
          components: "buttons",
          currency: "USD",
        }}
      >
        <ButtonWrapper
          currency={currency}
          showSpinner={false}
          reservation={reservation}
          room={props.room}
          prop={props.property}
          info={props.info}
        />
      </PayPalScriptProvider>
    </div>
  );
}

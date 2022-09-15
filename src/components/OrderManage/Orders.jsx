import React, { useState, useEffect } from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import { commerce } from "../../lib/commerce";
import OrderItem from "./OrderItems/OrderItem"
import axios from "axios";
const Orders = ({ orderList }) => {
  const [orderState,setOrderState] = useState([{}])
  // useEffect(() => {
  //   // function getOrderCustomer (userID){
  //   //   const url = "http://localhost:8000/api/order/find_order_cus/" + userID
  //   //   axios.get(url)
  //   //   .then(function (response) {
  //   //     // handle success
  //   //     setOrderState(response.data)
  //   //   })
  //   //   .catch(function (error) {
  //   //     // handle error
  //   //     console.log(error);
  //   //   })
  //   // }

  //   // const user = window.localStorage.getItem("user");
  //   // console.log(JSON.parse(user).userID);

  //   // getOrderCustomer(JSON.parse(user).userID)

  // }, []);

  console.log(orderList)
  

  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        style={{ fontSize: "30px", marginTop: "100px" }}
      >
        Order 
      </Typography>

      {orderList.map((ord) => (
        <div key={ord.orderID}>
        <OrderItem  orderItem={ord} detail={ord.orderDetail}  />
        </div>
    ))}
    </>
  );
};

export default Orders;

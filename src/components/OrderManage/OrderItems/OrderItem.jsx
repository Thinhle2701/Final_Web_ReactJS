import React, { useState, useEffect } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Button,
} from "@material-ui/core";
import { commerce } from "../../../lib/commerce";
const OrderItem = ({ orderItem, detail }) => {
  const [orderDetail, setOrderDetail] = useState({});
  const [list, setList] = useState([{}]);
  console.log(detail.line_items.length);
  return (
    <>
      {/* <div>
        {orderID === "" ? (
          <p>hello</p>
        ) : (
          <div>
            <List disablePadding>
              {list.map((item) => (
                <div>
                  <ListItem key={item.product_name}>
                    <img
                      src={item.image.url}
                      style={{
                        height: "150px",
                        width: "200px",
                        marginRight: "10px",
                        marginLeft: "10px",
                      }}
                    ></img>
                    <ListItemText
                      style={{ fontSize: "30px" }}
                      primary={item.name}
                      secondary={`quantity : ${item.quantity} `}
                    />
                    <Typography variant="body2" fontSize="30px">
                      {item.line_total.formatted_with_symbol}
                    </Typography>
                  </ListItem>
                </div>
              ))}
            </List>
          </div>
        )}
      </div> */}

      <div>
        <Card style={{ marginLeft: "20%", marginRight: "20%", margin: "50px", }}>
          <div style={{ display: "flex" }}>
            <div style={{ marginLeft: "2%" }}>
              <p style={{ fontWeight: "bold" }}>ORDER: {orderItem.orderID}</p>
              <p>
                {orderItem.date} by {orderItem.shippingData.firstName}{" "}
                {orderItem.shippingData.lastName}
              </p>
            </div>

            <div style={{ marginLeft: "auto", paddingRight: "2%" }}>
              <p>🟠 {orderItem.status}</p>
            </div>
          </div>
          <div style={{ }}>
            <div style={{ alignItems: "center", textAlign: "center" }}>
              <p style={{ fontWeight: "bold", fontSize: "30px" }}>
                {detail.line_items[0].product_name}
              </p>
            </div>

            <div style={{marginLeft:'100px',display:'flex',alignItems:'center'}}>
              <img
                src={detail.line_items[0].image.url}
                style={{
                  height: "150px",
                  width: "200px",
                  marginRight: "10px",
                  marginLeft: "10px",
                }}
              ></img>
                <p style={{ fontSize: "20px",paddingLeft:"10%" }}>Quantity: 
                {" "} {detail.line_items[0].quantity}
              </p>

              <p style={{ fontSize: "20px",paddingLeft:"10%" }}>Price Per unit: 
                {" "} {detail.line_items[0].price.formatted_with_symbol}

              </p>
            </div>
          </div>

          <p>{detail.line_items.length - 1}</p>
        </Card>
      </div>
    </>
  );
};

export default OrderItem;

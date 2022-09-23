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
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import ArrowRight from "@material-ui/icons/ArrowRight";
import ButtonBase from "@material-ui/core/ButtonBase";
import { commerce } from "../../../lib/commerce";
const OrderItem = ({ orderItem, detail }) => {
  const [orderDetail, setOrderDetail] = useState({});
  const [list, setList] = useState([{}]);
  // console.log(detail.line_items.length);
  const [indexItem, setIndexItem] = useState(0);
  const handleClickArrowRight = () => {
    if (indexItem == detail.line_items.length - 1) {
      setIndexItem(0);
    } else {
      var temp = indexItem + 1;
      setIndexItem(temp);
    }
  };

  const handleClickArrowLeft = () => {
    if (indexItem == 0) {
      setIndexItem(0);
    } else {
      var temp = indexItem - 1;
      setIndexItem(temp);
    }
  };

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
        <Card style={{ marginLeft: "20%", marginRight: "20%", margin: "50px" }}>
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
          <div style={{}}>
            <div style={{ alignItems: "center", textAlign: "center" }}>
              <p style={{ fontWeight: "bold", fontSize: "30px" }}>
                {detail.line_items[indexItem].product_name}
              </p>
            </div>

            <div style={{ display: "flex", marginLeft: "20px" }}>
              <ButtonBase onClick={() => handleClickArrowLeft()}>
                <ArrowLeft style={{ fontSize: "40px"}} />
              </ButtonBase>
              <div
                style={{
                  marginLeft: "100px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={detail.line_items[indexItem].image.url}
                  style={{
                    height: "150px",
                    width: "200px",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                ></img>
                <div style={{ fontSize: "20px", marginLeft: "200px" }}>
                  <p>Quantity: {detail.line_items[indexItem].quantity}</p>
                </div>
                <div style={{ fontSize: "20px", marginLeft: "200px" }}>
                  <p style={{ fontSize: "20px" }}>
                    Price Per unit:{" "}
                    {detail.line_items[indexItem].price.formatted_with_symbol}
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: "auto",
                  marginRight: "40px",
                }}
              >
                <ButtonBase onClick={handleClickArrowRight}>
                  <ArrowRight style={{ fontSize: "40px" }} />
                </ButtonBase>
              </div>
            </div>
          </div>

          <p>{detail.line_items.length - 1}</p>
        </Card>
      </div>
    </>
  );
};

export default OrderItem;

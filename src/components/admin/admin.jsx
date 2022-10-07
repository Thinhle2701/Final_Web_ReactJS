import React from "react";
import { Button } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
const admin = ({ numberConfirmORD }) => {
  return (
    <div>
      <h2 style={{ marginTop: "100px", textAlign: "center" }}>
        Admin Management
      </h2>
      <div style={{ marginTop: "10%", marginLeft: "10%", display: "flex" }}>
        <Button
          variant="outlined"
          style={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "50px",
            height: "200px",
            width: "300px",
            border: "2px solid black",
          }}
          component={Link}
          to="/admin/order"
        >
          <div style={{ textAlign: "center" }}>
            <Badge
              style={{ fontSize: "30px" }}
              overlap="rectangular"
              badgeContent={numberConfirmORD}
              color="primary"
            />
            <p>Order Management</p>
            <img
              style={{ width: "50px" }}
              src="https://cdn-icons-png.flaticon.com/512/81/81845.png"
            ></img>
          </div>
        </Button>
        <div style={{ marginLeft: "10%" }}>
          <Button
            variant="outlined"
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "50px",
              height: "200px",
              width: "300px",
              border: "2px solid black",
            }}
            component={Link}
            to="/admin/statistic"
          >
            <div style={{ textAlign: "center" }}>
              <Badge
                style={{ fontSize: "30px" }}
                overlap="rectangular"
                badgeContent={numberConfirmORD}
                color="primary"
              />
              <p>Statistic Chart</p>
              <img
                style={{ width: "50px" }}
                src="https://cdn-icons-png.flaticon.com/512/81/81845.png"
              ></img>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default admin;

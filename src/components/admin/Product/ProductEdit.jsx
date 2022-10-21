import React, { useState } from "react";
import axios from "axios";
import { storage } from "../../../firebase";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
  refFromURL,
} from "firebase/storage";
import Select from "react-select";
import { Input } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { IconButton, TextField, Button } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { v4 } from "uuid";
import { set } from "react-hook-form";
import { URL } from "url";

const ProductEdit = ({ setOpenEditModal, product }) => {
  const [productName, setProductName] = useState(product.name);
  const [productPrice, setProductPrice] = useState(
    product.price.formatted_with_symbol
  );
  const [productCategory, setProductCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  console.log(product);
  return (
    <div>
      <button
        style={{
          marginLeft: "auto",
          display: "flex",
          backgroundColor: "transparent",
          border: "none",
          fontSize: "20px",
          cursor: "pointer",
          marginBottom: "-30px",
        }}
        onClick={() => setOpenEditModal(false)}
      >
        X
      </button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "-40px",
          fontSize: "20px",
        }}
      >
        <h2>Product Detail</h2>
      </div>

      <div style={{ display: "flex", marginTop: "10px" }}>
        <div>
          <p style={{ fontWeight: "bold" }}>Product Name</p>
          <TextField
            id="outlined-basic"
            value={productName}
            variant="outlined"
            onChange={(e) => {
              setErrorMessage("");
              setProductName(e.target.value);
            }}
          />
        </div>
        <div style={{ marginLeft: "20%" }}>
          <p style={{ fontWeight: "bold" }}>Price</p>
          <TextField
            id="outlined-basic"
            value={productPrice}
            variant="outlined"
            onChange={(e) => {
              setErrorMessage("");
              setProductPrice(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;

import React, { useState } from "react";
import axios from "axios";

const ProductModal = ({ setOpenModal }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const uploadImage = () => {
    const formData = new FormData();
    console.log("select image", selectedImage);
    const object = { file: selectedImage, upload_preset: "wqxgggwi" };
    // formData.append("file", selectedImage);
    // formData.append("upload_preset", "wqxgggwi");
    axios
      .post("https://api.cloudinary.com/v1_1/duorrige1/image/upload", object)
      .then((Response) => {
        console.log(Response);
      });
    console.log(object);
  };
  return (
    <div>
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
          onClick={() => setOpenModal(false)}
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
      </div>

      <div>
        <input
          type="file"
          name="myImage"
          onChange={(event) => {
            // console.log(event.target.files[0])
            setSelectedImage(event.target.files[0]);
            console.log(URL.createObjectURL(event.target.files[0]))
          }}
        />
        <img src=""></img>
        <button onClick={uploadImage}>upload</button>
      </div>
    </div>
  );
};

export default ProductModal;

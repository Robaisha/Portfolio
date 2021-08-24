import "./card.css";
import React,{useState} from "react";
import Capture from "../Picture/Capture.PNG";
import msg from "../Picture/msg.PNG";
import phone from "../Picture/phone.PNG";
import AvatarMaker from "../Picture/AvatarMaker.png";
export default function Card() {
    const [details,setDetails]=useState({
    name:"Robaisha Masood",
    email:"xxxxxxx@gmail.com",
    contact:"03303363306",
    DOB:"27 Dec xxxx"
  })

  
  return (
    <div className="Portfolio-Card">
      <div className="image">
        <img src={AvatarMaker} style={{ width: "100%", borderRadius: "20px" }} />
      </div>
      <div className="details">
        <h1 style={{ fontSize: 45, fontFamily: "Poppins, sans-serif" }}>
          {details.name}
        </h1>
        <h2>Undergraduate Student</h2>
        <h6>Hi ! I am Robaisha , a self taught Developer</h6>
        <div>
          <ul className="basic-info">
            <li>
              <img
                src={Capture}
                style={{ width: "5%", borderRadius: "20px" }} 
              /><b>{details.DOB}</b>

            </li>
            <li>
              <img src={msg} style={{ width: "5%", borderRadius: "20px" }} /><b>{details.email}</b>
            </li>
            <li>
              <img src={phone} style={{ width: "5%", borderRadius: "20px" }} /><b>{details.contact}</b>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}

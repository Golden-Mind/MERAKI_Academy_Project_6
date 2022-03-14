import React, { useState } from "react";
import {AiOutlineCloudUpload} from "react-icons/ai"
import {RiFileList3Line} from "react-icons/ri"
import {MdOutlineFavoriteBorder} from "react-icons/md"
import {
  Nav,
  Container,
} from "react-bootstrap";
import Ads from "../ads/Ads";
import Add from "../ads/Add";
import "./profile.css";


export default function Profile({ userInfo }) {
  const [ads, setAds] = useState(false);
  const [add, setAdd] = useState(false);
console.log(userInfo);
  return (
  <>
  <div style={{display: "flex", flexDirection: "row", gap: "5vw"}}>
    {/* <Container className="d-flex flex-row mt-5 "> */}
      <Nav className="Nav">
        <Nav.Link className="NavLink"
          onClick={() => {
            setAdd(true);
            setAds(false);
          }}
          >
          <AiOutlineCloudUpload style={{marginRight: "0.5vw", fontSize: "2ch"}}/>
          Add Ads
        </Nav.Link>
        <Nav.Link className="NavLink"
          onClick={() => {
            setAds(true);
            setAdd(false);
          }}
        >
          <RiFileList3Line style={{marginRight: "0.5vw"}}/>
          Your Ads
        </Nav.Link>
        <Nav.Link className="NavLink"><MdOutlineFavoriteBorder style={{marginRight: "0.5vw", marginTop:"-1vh"}}/>Favorite</Nav.Link>
        {/* <Nav.Link className="NavLink">Disabled</Nav.Link> */}
      </Nav>
      {ads ? <Ads userInfo={userInfo}/> : add ? <Add /> : <></>}
    {/* </Container> */}
    </div>
    </>
  );
}

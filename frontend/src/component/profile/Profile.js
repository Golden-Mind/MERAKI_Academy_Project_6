import React, { useState } from "react";
import { CgPlayListAdd } from "react-icons/cg";
import { RiFileList3Line } from "react-icons/ri";
import { CgPlayListCheck } from "react-icons/cg";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { Nav, Container } from "react-bootstrap";
import Ads from "../ads/Ads";
import Add from "../ads/Add";
import "./profile.css";

export default function Profile({ userInfo, setId, setHome, setDetails }) {
  const [ads, setAds] = useState(false);
  const [add, setAdd] = useState(true);
  console.log(userInfo);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: "5vw" }}>
        <Nav className="Nav">
          <Nav.Link
            className="NavLink"
            onClick={() => {
              setAdd(true);
              setAds(false);
            }}
          >
            <CgPlayListAdd
              style={{ marginRight: "0.5vw", fontSize: "3ch" }}
            />
            Add Ads
          </Nav.Link>
          <Nav.Link
            className="NavLink"
            onClick={() => {
              setAds(true);
              setAdd(false);
            }}
          >
            <CgPlayListCheck style={{ marginRight: "0.5vw", fontSize: "3ch" }} />
            Your Ads
          </Nav.Link>
          <Nav.Link className="NavLink">
            <BsFillSuitHeartFill
              style={{ marginRight: "1vw", marginTop: "-1.2vh", fontSize: "2ch" }}
            />
            Favorite
          </Nav.Link>
        </Nav>
        {ads ? (
          <Ads
            userInfo={userInfo}
            setDetails={setDetails}
            setHome={setHome}
            setId={setId}
          />
        ) : add ? (
          <Add />
        ) : (
          <></>
        )}
        {/* </Container> */}
      </div>
    </>
  );
}

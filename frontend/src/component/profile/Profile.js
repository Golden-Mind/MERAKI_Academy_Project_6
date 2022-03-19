import React, { useState } from "react";
import { CgPlayListAdd } from "react-icons/cg";
import { CgPlayListCheck } from "react-icons/cg";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { Nav } from "react-bootstrap";
import Ads from "../ads/Ads";
import Add from "../ads/Add";
import Favoraite from "../favoraite/Favoraite";
import "./profile.css";

export default function Profile({ userInfo, setId, setHome, setDetails }) {
  const [ads, setAds] = useState(false);
  const [add, setAdd] = useState(true);
  const [getFav, setGetFav] = useState(false);

  //===============================================================

  return (
    <>
      <div className="divProfile">
        <Nav className="Nav">
          <Nav.Link
            className="NavLink"
            onClick={() => {
              setAdd(true);
              setAds(false);
              setGetFav(false);
            }}
          >
            <CgPlayListAdd style={{ marginRight: "0.5vw", fontSize: "3ch" }} />
            Add Ads
          </Nav.Link>
          <Nav.Link
            className="NavLink"
            onClick={() => {
              setAds(true);
              setAdd(false);
              setGetFav(false);
            }}
          >
            <CgPlayListCheck
              style={{ marginRight: "0.5vw", fontSize: "3ch" }}
            />
            Your Ads
          </Nav.Link>
          <Nav.Link
            className="NavLink"
            onClick={() => {
              setGetFav(true);
              setAds(false);
              setAdd(false);
            }}
          >
            <BsFillSuitHeartFill
              style={{
                marginRight: "1vw",
                marginTop: "-1.2vh",
                fontSize: "2ch",
              }}
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
        ) : getFav ? (
          <Favoraite
            userInfo={userInfo}
            setDetails={setDetails}
            setHome={setHome}
            setId={setId}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

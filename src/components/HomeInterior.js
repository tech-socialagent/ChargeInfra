import React, { useContext } from "react";
import "../stylesheets/HomeInterior.css";
import Data from "../Data.json";
import { useState } from "react";
import DownloadBroucher from "../components/DownloadBroucher";
import DownloadPopup from "./DownloadPopup/DownloadPopup";
import { DownloadContext } from "../Context";
function HomeInterior() {
  // const [popUpbtn, setpopUpbtn] = useState(false);
  // const [downloadPop, setDownloadPop] = useState(true)
  const {downloadPop, setDownloadPop} = useContext(DownloadContext);

  return (
    <>
    <section className="homeInterior_main">
      <div className="homeInterior_left">
        <h1 className="homeInterior_title">
          <span className="EMI_yellow_text">Download</span> home interior
          designing guide.
        </h1>
        <p className="homeInterior_desc">
          {Data.home_interior.home_interior_left.home_interior_desc}
        </p>
        <button
          className="homeInterior_btn"
          onClick={() => {
            setDownloadPop(true)
          }}
        >
          <img
            src={require("../assets/interior/" +
              Data.home_interior.home_interior_left.home_interior_btn_img)}
            alt=""
          />
          <p>{Data.home_interior.home_interior_left.home_interior_btn_text}</p>
        </button>
      </div>
      <div className="homeInterior_right">
        <img
          src={require("../assets/interior/" +
            Data.home_interior.home_interior_right.home_interior_img)}
          alt=""
        />
      </div>
    </section>
    {/* <DownloadBroucher trigger={popUpbtn} setTrigger={setpopUpbtn} /> */}
    { downloadPop ? <DownloadPopup /> : ''}
  </>
  );
}

export default HomeInterior;

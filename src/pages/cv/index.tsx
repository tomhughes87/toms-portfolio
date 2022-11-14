import React from "react";
import pdf from "./TomHughesCV.pdf";
import "./index.css";

export default function CvPage() {
  return (
    <div id="cvContainer">
      <br></br>
      {/* <iframe id="pdf-frame" src={`${pdf}#navpanes=0`}></iframe> */}
      {/* <iframe src={`${pdf}#navpanes=0`} width="850px" height="1190px"></iframe> */}
      <br></br>
      <a id="downloadCVbtn" href={pdf} download="TomHughesCV">
        Download CV
      </a>

      <object id="pdf-frame" data={pdf} type="application/pdf">
        <div>No online PDF viewer installed</div>
      </object>
    </div>
  );
}

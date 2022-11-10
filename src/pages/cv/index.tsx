import React from 'react'
import pdf from './TomHughesCV.pdf'
import './index.css'

export default function CvPage() {
  return (
    <div id='cvContainer'>

        <br></br>
        <iframe src={`${pdf}#navpanes=0`} width="850px" height="1190px"></iframe>
        <br></br>
        <a id='downloadCVbtn' href={pdf} download="TomHughesCV">Download CV</a>
    </div>
  )
}

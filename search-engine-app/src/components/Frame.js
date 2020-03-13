import React from 'react';
import './Frame.css';

const Frame = (props) => {
 return (
   <iframe src={`${props.url}&output=embed`} id="frame">

   </iframe>
 )
}

export default Frame

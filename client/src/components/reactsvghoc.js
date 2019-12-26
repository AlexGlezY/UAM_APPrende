import React, { Component } from 'react';
import ReactSVG from "react-svg";
function ReactSVGHttps(props) {
    const httpsUri = props.src.replace("http://","https://");
    return <ReactSVG {...props} src={httpsUri}/>
}

export default ReactSVGHttps;
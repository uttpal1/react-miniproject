import React from "react";
import ReactDOM from "react-dom";
import './index.css';
var time = new Date();
var hour = time.getHours();
var greeting = "";
var css = {};
if(hour >=1 && hour<12)
{
  greeting = 'Good Morning';
  css.color = "Green";
}
else if(hour>=12 && hour<19){
  greeting = 'Good Afternoon';
  css.color = "Orange";
}
else if(hour>=19 && hour<24){
  greeting = 'Good Night';
  css.color = "Black";
}
ReactDOM.render(
  <>
  <div className="div">
  <h2 className="heading">Hello UTTPAL KANT, <span style={css}>{greeting}</span> </h2>
  </div>
  </>,  
  document.getElementById("root")
);
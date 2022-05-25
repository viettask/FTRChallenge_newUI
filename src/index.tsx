import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';


// const numberList = () => { 
//   document.getElementById("numberandfrequency").innerHTML = "Happy Birthday!"
// }

// let seconds = sessionStorage.getItem("frequency");
// //const myTimeout = setTimeout(numberList, seconds);
// let output = setTimeout(numberList, seconds*1000 );



ReactDOM.render(
  <App />,
  document.getElementById('root')
);




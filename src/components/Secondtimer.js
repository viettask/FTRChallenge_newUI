import React from "react"
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const handleChange = () => { 
    const num = document.getElementById("timing").value;
    if(!isNaN(num.trim()) && num.trim()!==""){
        sessionStorage.setItem('frequency',num)
        document.getElementById("freBtn").disabled = true;

        document.getElementById("numberentered").innerHTML = "<p>The frequency entered is "+num+" (in seconds) </p>"
        document.getElementById("timing").disabled = true;


        document.getElementById("timing").value = num.trim();
        document.getElementById("notification_timer").innerHTML = "<span class='welcome'> Done! Thanks</span>";

    }
    else
    {
        //alert("The frequency value must be a number. Please enter again!");
        document.getElementById("timing").value = "";
        //document.getElementById("notification_timer").innerHTML = "<span>Please input the amount of time between emitting numbers and their frequency</span>";
        document.getElementById("notification_timer").innerHTML = "<span class='warning'>The frequency value must be a number. Please enter again!</span>";
    }
 };




 

export default function Secondtimer() {

    return (
        <div className="">

                    <input type="text" placeholder="" name="" id="timing" onKeyUp="" className="input" />
                    <button id="freBtn" className="enterBtn button" onClick={handleChange}> Confirm</button>
                    <p>(in seconds)</p>

                    <p id="notification_timer">
                    <span className="welcome">Please input the amount of time between emitting numbers and their frequency</span>
                    </p>

        </div>
    )
}
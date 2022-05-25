import React from "react";

function checkFib(num)
{
    let a = 0;
    let b = 1;
    if (num==a || num==b) return true;
    let c = a+b;
    while(c<=num)
    {
        if(c == num) return true;
        a = b;
        b = c;
        c = a + b;
    }
    return false;
}

const handleClick = () => {

   const num = document.getElementById("numberadded").value.trim();
   let numArr = [];


 
   if((sessionStorage.getItem("frequency") === null))  
   {
      // alert("Please enter the frequency value first");
       document.getElementById("notification_num").innerHTML = "<span class='warning'>Please enter the frequency value first</span>";
   }
   else{
        

        if ((sessionStorage.getItem("numberList") === null)) {
            if (!isNaN(num) && num!=="") {
                sessionStorage.setItem('numberList', num);
                //document.getElementById("numberentered").innerHTML += checkFib(num);
                let str = checkFib(num)?"<p> The first number is " + num+" - <b>FIB</b> </p>":"<p> The first number is " + num+"</p>";
                document.getElementById("numberentered").innerHTML += str;

                document.getElementById("numberadded").value = "";
                //document.getElementById("numberadded").placeholder = "Please enter the next number";
                document.getElementById("notification_num").innerHTML = "<span class='welcome'>Please enter the next number</span>";
            }
            else {
                //alert("The value must be a number. Please enter again!");
                document.getElementById("numberadded").value = "";
                document.getElementById("numberadded").placeholder = "Please enter the first number";
                document.getElementById("notification_num").innerHTML = "<span class='warning'>The value must be a number. Please enter again!</span>";
            }
        }
        else {
            if (!isNaN(num) && num!=="") {
                numArr.push(sessionStorage.getItem("numberList"));
                numArr.push(num);
                sessionStorage.setItem('numberList', [...numArr]);
               // document.getElementById("numberentered").innerHTML += checkFib(num);
                let str = checkFib(num)?"<p> The next number is " + num+" - <b>FIB</b> </p>":"<p> The first number is " + num+"</p>";
                document.getElementById("numberentered").innerHTML += str;


                document.getElementById("numberadded").value = "";
                //document.getElementById("numberadded").placeholder = "Please enter the next number";
                document.getElementById("notification_num").innerHTML = "<span class='welcome'>Please enter the next number</span>";
            }
            else {
                //alert("The value must be a number. Please enter again!");
                document.getElementById("notification_num").innerHTML = "<span class='warning'>The value must be a number. Please enter again!</span>";
            }
        }
   }

};




export default function Nextnumber() {


    return (
        <div className="">
        <input type="text" placeholder="" name="" id="numberadded" className="input"/>
        <button  className="enterBtn button" onClick={handleClick}>Confirm</button>
            <p>

            </p>
            <p id="notification_num">
               <span className="welcome">Please enter the first number</span>
            </p>
        </div>
    )
}
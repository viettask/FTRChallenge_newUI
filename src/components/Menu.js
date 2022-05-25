import React from 'react';

function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}


export default function Menu() {

   // const [program, setProgram] = useState("quit");
    let status="quit";
    let interval;
    let objNumList = [];

    

    const handleQuit = () => {
        document.getElementById("freBtn").disabled = false;
        document.getElementById("quitBtn").disabled = true;
        sessionStorage.removeItem('frequency');
        sessionStorage.removeItem('numberList');
        document.getElementById("timing").disabled = false;
        status="quit";
        document.getElementById("numberentered").innerHTML = "<p>Please enter the field required above</p>";
        document.getElementById("numberandfrequency").innerHTML += "<p>Thanks for playing</p>";
        document.getElementById("startBtn").disabled = false;
        document.getElementById("timing").value = "";
        document.getElementById("timing").placeholder = "Please input the amount of time between emitting numbers and their frequency";
        clearInterval(interval);
        document.getElementById("notification_timer").innerHTML = "<span class='welcome'>Please input the amount of time between emitting numbers and their frequency</span>";

    }

    const handleStart = () => {
        if("frequency" in sessionStorage &&  "numberList" in sessionStorage)
        {
            status="start";
            document.getElementById("quitBtn").disabled = false;
            document.getElementById("startBtn").disabled = true;
            document.getElementById("timing").disabled = false;
            document.getElementById("numberandfrequency").innerHTML = "<p>The system has started</p> <p>";

            
            handleInterval();
        }
        else{
            alert("Please enter all the field required")
        }

    }

    const handleHalt = () => {
        clearInterval(interval);
        document.getElementById("haltBtn").disabled = true;
        document.getElementById("startBtn").disabled = true;
        document.getElementById("resumeBtn").disabled = false;
        document.getElementById("timing").disabled = true;
        document.getElementById("numberandfrequency").innerHTML += "<p>The system has paused</p>";
        status="halt";
    }


    const handleResume = () => {
        status="start";
        document.getElementById("startBtn").disabled = true;
        document.getElementById("haltBtn").disabled = false;
        document.getElementById("resumeBtn").disabled = true;
        document.getElementById("numberandfrequency").innerHTML += "<p>The system has resumed</p>";
        handleInterval();

    }

    //()=> setProgram("resume")
    const handleInterval = () => {
        interval = setInterval(function() {
            if(status==="start")
            {
                let numArr = sessionStorage.getItem("numberList").split(',');
                let coreNum = removeDuplicates(numArr); 
                let coreNumCount = new Array(coreNum.length).fill(0);
                for(let i=0;i<coreNum.length;i++) {
                    for(let j=0;j<numArr.length;j++) {
                        if(coreNum[i]===numArr[j])
                            coreNumCount[i]++;
                    }; 
                };

                // coreNum.forEach((element, index) => {
                //     objNumList[element] = coreNumCount[index];
                //   });

                // for (let m = 0; m < coreNum.length; m++) {
                //     objNumList[coreNum[m]] = coreNumCount[m];
                // }
                objNumList = [];

                for (let m = 0; m < coreNum.length; m++) {
                    objNumList.push({
                        'key': coreNum[m],
                        'value': coreNumCount[m]
                    });
                }

                objNumList.sort(function(a, b) { return b.value - a.value; });
                document.getElementById("numberandfrequency").innerHTML += "<p>";


                console.log(objNumList);

                let index = 0;
                objNumList.map(obj =>{
                    document.getElementById("numberandfrequency").innerHTML += "<span>"+obj.key+":"+obj.value+" </span> ";
                     
                    if(index<objNumList.length-1)
                    {
                        document.getElementById("numberandfrequency").innerHTML += "<span>, </span> "; 
                    }
                    index++;
                })

                
                document.getElementById("numberandfrequency").innerHTML += "</p>";
            }

            
          }, sessionStorage.getItem("frequency")*1000);
    }

    return (
        <div className="menu">
        <button className="button" id="startBtn" onClick={handleStart}>Start</button>
        <button className="button"id="haltBtn" onClick={handleHalt}>Halt</button>
        <button  className="button" id="resumeBtn" onClick={handleResume}>Resume</button>
        <button  className="button" id="quitBtn" onClick={handleQuit} >Quit</button>
        </div>
    )
}
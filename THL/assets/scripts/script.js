function myFunction2() {
  document.getElementById("demo").innerHTML = "Kyselyyn vastattu!";
}

type="text/javascript"> 
alert("Hello World"); 

function myFunction3() {
    document.getElementById("demo").innerHTML = "Kyselyyn vastattu!";
  }



function myFunction1() {
  document.getElementById("demo").innerHTML = "Testattu";
}


type="text/javascript"
    var teksti = "Kiitos käynnistä!";
    document.write(teksti); 


type="text/javascript">  
function msg(){  
 alert("Hello Javatpoint");  
}  

function addDays(date, days) {
    date.setDate(date.getDate() + days);
    return date;
  }
  
  //const date = new Date('2023-09-11T00:00:00.000Z');
  //const newDate = addDays(date, 5);
  //console.log(newDate);

import { addDays } from 'date-fns';
const date = new Date('2022-05-15T00:00:00.000Z');
const newDate = addDays(date, 5);
console.log(newDate); // 2022-05-20T00:00:00.000Z
// original not modified
console.log(date); // 2022-05-15T00:00:00.000Z

var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

var dt = new Date();
document.getElementById("datetime").innerHTML = (("0"+(dt.getMonth()+1)).slice(-2)) +"/"+ (("0"+dt.getDate()).slice(-2)) +"/"+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()+1).slice(-2)) +":"+ (("0"+dt.getMinutes()+1).slice(-2));






  
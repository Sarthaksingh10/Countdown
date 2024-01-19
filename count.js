let Year=prompt("Enter the year");
let Month=prompt("Enter the month (0-11)");
let Day=prompt("Enter tha Day (1-31)");

const enddate=new Date(Year,Month,Day);

setInterval(countdown= () => {
    const startdate=new Date();
let input=document.querySelectorAll("input");
 const endDate=enddate;

document.getElementById("date").innerText=enddate;

const year=endDate.getFullYear()-startdate.getFullYear();

const date=endDate.getDate()-startdate.getDate();

const month=endDate.getMonth()-startdate.getMonth();

const hours=24-startdate.getHours();

const minutes=60-startdate.getMinutes();

const seconds=60-startdate.getSeconds();

input[0].value=Math.floor(year);
input[1].value=Math.floor(month);
input[2].value=Math.abs(Math.floor(date));
input[3].value=Math.abs(hours);
input[4].value=Math.abs(minutes);
input[5].value=Math.abs(seconds);
}, 1000);








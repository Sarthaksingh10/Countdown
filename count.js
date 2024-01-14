

setInterval(countdown= () => {
    const startdate=new Date();
let input=document.querySelectorAll("input");

const enddate=new Date(2023,11,27);
document.getElementById("date").innerText=enddate;

const year=enddate.getFullYear()-startdate.getFullYear();

const date=enddate.getDate()-startdate.getDate();

const month=enddate.getMonth()-startdate.getMonth();

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








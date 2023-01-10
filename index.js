const monthElement=document.querySelector(".date h1");
const fullDateElement=document.querySelector(".date p");
const daysElement=document.querySelector(".days")
const monthIndex=new Date().getMonth();
const yearIndex=new Date().getFullYear();
const lastDay=new Date(yearIndex,monthIndex+1,0).getDate();
const firstDay=new Date(yearIndex,monthIndex,0).getDay();
const months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novemeber",
    "December",
];
monthElement.innerText=months[monthIndex];
fullDateElement.innerText=new Date().toDateString();
let days= "";
for(let j=firstDay;j>0;j--)
{
    days+=`<div class="empty"></div>`;
}
for(let i=1;i<=lastDay;i++)
{
    if(i === new Date().getDate()){
      days +=`<div class="today">${i}</div>`;
    }
    else{
      days +=`<div>${i}</div>`;
    }   
}
daysElement.innerHTML=days;

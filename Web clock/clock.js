var d=new Date();
let i=d.getSeconds();
let j=d.getMinutes();
let k=d.getHours();

const second=document.querySelector(".second");
second.style.setProperty('--rotation',i);
second.style.transform='rotate(calc(var(--rotation)*6deg))';
const minute=document.querySelector(".minute");
minute.style.setProperty('--rotation',j);
minute.style.transform='rotate(calc(var(--rotation)*6deg))';
const hour=document.querySelector(".hour");
hour.style.setProperty('--rotation',k);
hour.style.transform='rotate(calc(var(--rotation)*30deg))';

function increment_seconds()
{i++
const sec=document.querySelector(".second");
sec.style.setProperty('--rotation',i);
sec.style.transform='rotate(calc(var(--rotation)*6deg))';
if(i==60)
{i=1;
j++;
const min=document.querySelector(".minute");
min.style.setProperty('--rotation',j);
min.style.transform='rotate(calc(var(--rotation)*6deg))';
}
if(j==60)
{j=1;
k++;
const hr=document.querySelector(".hour");
hr.style.setProperty('--rotation',k);
hr.style.transform='rotate(calc(var(--rotation)*30deg))';
}
}
setInterval(increment_seconds,1000);


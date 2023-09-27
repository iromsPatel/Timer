const h=document.getElementById("h");
const m=document.getElementById("m");
const s=document.getElementById("s");

// const data= new Date();

function dateUpdate(){
    const data= new Date();
    const hour=data.getHours();
   
    if(hour<12){
        h.value=`${hour} A.M`;
    }else if(hour>=12){
        h.value=`${hour%12} P.M`;
    }
    m.value=data.getMinutes();
    s.value=data.getSeconds();
}

setInterval(() => {
   dateUpdate(); 
},1000);
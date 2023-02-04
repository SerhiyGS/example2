"use strict";

const SendMSG = (msg, request, answer, imgfile)=>{
    let formData = new FormData();
     formData.append("rezhim",msg);
     formData.append("zapyt",request);
     if(imgfile) formData.append("imgfile",imgfile);
 
    var x = new XMLHttpRequest();
    x.open("POST", "http://serhiy.my-board.org/001/index.php", true);
    x.send(formData);
    x.onload = ()=>{
         //let nove = Math.floor(Date.now() / 1000) - Zaraz;
         let ar;
       let radochok = '';
         switch (msg) {
          case 'r0':
 
             ar = JSON.parse(x.responseText);

             answer.innerHTML = ar[0].answer;
 
             break;


             default:
                alert ('answer.innerHTML = x.responseText');
              break;
           }
        }
     }        

//let JSstr = JSON.stringify([G_Param1, G_Param2, G_Param3, par.last_time]);
let G_Param1, G_Param2, G_Param3, last_time;
G_Param1='login';
G_Param2='password';
G_Param3='sid';
G_Param4=new Date().getTime();


let JSstr = JSON.stringify([G_Param1, G_Param2, G_Param3, G_Param4]);
SendMSG('r0', JSstr, '', '' );
  
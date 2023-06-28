console.log(2+3);
var left=document.querySelector(".leftclass");
var right=document.querySelector(".rightclass");
var ui2=document.querySelector(".ui2");
var ui=document.querySelector(".ui");
var k=1;
left.onclick=function(){
       if(k===1){
        k=2;
        ui.setAttribute("style","display:none");
        ui2.setAttribute("style","display:flex");
        var button1=document.querySelector(".button1");
        var button2=document.querySelector(".button2");
        button1.className="button2";
        button2.className="button1";      
       }
       else{
          k=1;
          var button1=document.querySelector(".button1");
          var button2=document.querySelector(".button2");
          button1.className="button2";
          button2.className="button1";
          ui2.setAttribute("style","display:none");
          ui.setAttribute("style","display:flex");           
       }
}
right.onclick=function(){
       if(k===1){
              k=2;
              var button1=document.querySelector(".button1");
              var button2=document.querySelector(".button2");
              button1.className="button2";
              button2.className="button1";
              ui.setAttribute("style","display:none");
              ui2.setAttribute("style","display:flex");
       }
       else{
              k=1;
              var button1=document.querySelector(".button1");
              var button2=document.querySelector(".button2");
              button1.className="button2";
              button2.className="button1";
              ui2.setAttribute("style","display:none");
              ui.setAttribute("style","display:flex");    
       }
}
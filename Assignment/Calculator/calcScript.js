var array_stat=[];
var state = 0;
var fun = ["acos","ln","atan","asin","sqrt","ans","log","sin","cos","tan"];
var ans = 0;
function typer(s){
    if(array_stat.length==0){
        document.getElementById("text").innerHTML="";
        document.getElementById("tx2").innerHTML="";
    }
    if(s=="ans"){
        document.getElementById("text").innerHTML += document.getElementById(s).innerText;
        array_stat.push(ans);
    }
    else if(s=="sin" || s =="cos" || s=="tan" || s=="ln" || s=="abs" || s=="sqrt"){
        document.getElementById("text").innerHTML += document.getElementById(s).innerText +"(";
        array_stat.push(document.getElementById(s).innerText +"(");
    }
    else{
        document.getElementById("text").innerHTML += document.getElementById(s).innerText;
         if(s=="power"){
            array_stat.push("**");
        }
        else{
        array_stat.push(document.getElementById(s).innerText);
    }
    }
}
function clearAll(){
    document.getElementById("text").innerHTML="";
    array_stat=[]; 
    document.getElementById("tx2").innerHTML="";
}
function calculate(){
    if(array_stat.length==0){
        var display= document.getElementById("text").innerHTML;
       var statement = replaceAll("^","**",display);
        ans = evaluate(statement);
    }
    else{
    var statement = array_stat.join("");
    
    try{
    ans = evaluate(statement);
     }catch(error){
         ans ="Syntax error"
        document.getElementById("tx2").innerHTML = ans;
    }
}
if(ans== undefined || ans ==null){
    document.getElementById("tx2").innerHTML = "Syntax error";
}
else{
document.getElementById("tx2").innerHTML = ans;
}
 array_stat=[];
}
function  sin(a){
 var rad = Math.PI/180 *a;
 return Math.sin(rad);
}
function  cos(a){
    if(a==90){
        return 0;
    }
    else{
    var rad = Math.PI/180 *a;
    return Math.cos(rad);}
   }
function  tan(a){
    var rad = Math.PI/180 *a;
    return Math.tan(rad);
}
function  ln(a){
    return Math.log(a);
}
function  abs(a){
    return Math.abs(a);
}
function  sqrt(a){
    return Math.sqrt(a);
}
function asin(a){
    var rad = Math.asin(a);
    return (rad*180/Math.PI);
}
function acos(a){
    var rad = Math.acos(a);
    return rad*180/Math.PI;
}
function atan(a){
    var rad = Math.atan(a);
    return rad*180/Math.PI;
}
function log(a){
    return Math.log10(a);
}
function del(){
       var el_to_del = array_stat.pop();
        var display = document.getElementById("text").innerHTML;
        if(el_to_del=="**"){
        display = display.slice(0,display.lastIndexOf("^"));
            }
        else{
        display = display.substring(0,display.lastIndexOf(el_to_del));
       }
       document.getElementById("text").innerHTML=display;
    }
    function replaceAll(s,new_s,str){
        if(str.search(s) != -1){
      var arr = new Array(str.length);
      arr[0]=str.replace(s,new_s);
      for(var i=1;i<str.length;i++){
          arr[i]=arr[i-1].replace(s,new_s);
      }
      return arr[str.length-1];
    }
    else{
        return str;
    }
    }
function shift(){
      if(state%2==0){
        document.getElementById("cos").innerHTML = "acos";
        document.getElementById("sin").innerHTML = "asin";
        document.getElementById("tan").innerHTML = "atan";
        document.getElementById("ln").innerHTML = "log";
        document.getElementById("cos").style.color = "red";
        document.getElementById("sin").style.color = "red";
        document.getElementById("tan").style.color = "red";
        document.getElementById("ln").style.color = "red";
      }
      else{
        document.getElementById("cos").innerHTML = "cos";
        document.getElementById("sin").innerHTML = "sin";
        document.getElementById("tan").innerHTML = "tan";
        document.getElementById("ln").innerHTML = "ln";
        document.getElementById("cos").style.color = "black";
        document.getElementById("sin").style.color = "black";
        document.getElementById("tan").style.color = "black";
        document.getElementById("ln").style.color = "black";
      }
      state++;
   }
   function searcher(str){
       var pos = str.lastIndexOf("(");
       if(pos != -1){
           for(var i = pos;i<str.length;i++ ){
           if(str[i]==")"){
               var end_pos = i+1;
               break;
           }
        }
       }
       var sub = str.substring(pos,end_pos);
       alert(sub);
       evaluate(sub);
   }

   function evaluate(str){
       var keeper=[];
   for(var i = 0;i<str.length;i++){
       if(str.charCodeAt(i)<40 || str.charCodeAt(i)>57 ){
        keeper.push(str.charAt(i));
       }
   }
   var s = keeper.join("");
   for(var i =0;i<fun.length;i++){
       s = replaceAll(fun[i],"",s);
   }
   if(s.length==0){
    var an = new Function("return "+ str)();
    return an;
}
    else{
        return "Syntax Error";
    }
   }
   function numberify(str){
       var str_numb ="";
       alert("good");
       alert(str.charCodeAt(1));
       for(var i = 0;i<str.length;i++){
           if(str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57){
               alert(str_numb);
            str_numb += str.charAt(i);
            alert(str_numb);
            continue;
           }
           else{
            var  numb = Number(str_numb);
            alert("good");
              str = str.replace(str_numb,numb);
              numb="";
              continue;
           }
       }
   }

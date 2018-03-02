function stateValidation(){
var str = document.getElementById("state_field").value.toLocaleLowerCase();
switch(str){
    case("lagos"): document.getElementById("info").style.display="none";
    document.getElementById("sex").style.display ="block";
    document.getElementById("age").style.display = "block";
    break;

    case("ogun"): document.getElementById("info").style.display="none";
    document.getElementById("sex").style.display ="block";
    document.getElementById("age").style.display = "block";
    break;

    case("osun"): document.getElementById("info").style.display="none";
    document.getElementById("sex").style.display ="block";
    document.getElementById("age").style.display = "block";
    break;

    case("oyo"): document.getElementById("info").style.display="none";
    document.getElementById("sex").style.display ="block";
    document.getElementById("age").style.display = "block";
    break;

    case("ekiti"): document.getElementById("info").style.display="none";
    document.getElementById("sex").style.display ="block";
    document.getElementById("age").style.display = "block";
    break;

    default: document.getElementById("info").innerHTML ="Sorry,this survey is not available in your state";
    document.getElementById("info").style.display ="block";
    break;
}
}

function ageValidation(){
    var age = document.getElementById("age_field").value;
    if(age>= 0 && age<=10){
        document.getElementById("info").innerHTML ="Sorry,this survey is open only to those above the age of 10";
        document.getElementById("info").style.display ="block";
    }
    else if(age>10 && age<=16){
        document.getElementById("info").style.display="none";
        document.getElementById("school").style.display = "block";

    }
    else if(age>16 &&age<=120){
        document.getElementById("info").style.display="none";
        document.getElementById("occupation").style.display = "block";
    }
    else{
        alert("Please enter a valid age");
    }  
}
function schoolValidation(str){
    if(str =="public"){
       document.getElementById("rate_Edu").style.display = "block";
       document.getElementById("public_vic").style.display = "none";
    }
    else if(str=="private"){
        document.getElementById("rate_Edu").style.display = "none";
        document.getElementById("public_vic").style.display = "block";
    }
    else{
              alert("Please enter a valid input")                                                                                                                                                                                                                                                                                                  
    }
}
function rateEduValidation(){
    var num = document.getElementById("rate_Edufield").value;
    if(num>=1 && num<=5){
        document.getElementById("scholarship").style.display = "block";
    }
    else{
        alert("Please enter a number between 1 and 5");
    }
}

function publicVicValidation(str){
    if(str =="yes"){
       document.getElementById("feel_public").style.display = "block";
        
     }
     else if(str=="no"){
         End();
     }
}
function occupationValidation(){
    var str = document.getElementById("occupation_field").value.toLocaleLowerCase();
    if(str ==("student")){
       document.getElementById("university").style.display = "block";
    }
    else if(str==("unemployed")){
        document.getElementById("empowerment").style.display = "block";
    }
    else if(str==("retired")){
        document.getElementById("retired").style.display = "block";
    }
    else{
        document.getElementById("tax").style.display = "block";
    }
}
function universityValidation(str){
    if(str =="fg"){
        document.getElementById("rateGov").style.display = "none";
        document.getElementById("rateUni").style.display = "none";
        document.getElementById("bursary").style.display = "block";
    }
    else  if(str =="sg"){
        document.getElementById("rateGov").style.display = "none";
        document.getElementById("bursary").style.display = "none";
        document.getElementById("rateUni").style.display = "block";
    }
    else{
        document.getElementById("rateUni").style.display = "none";
        document.getElementById("bursary").style.display = "none";
        document.getElementById("rateGov").style.display = "block";
    }
}
function rateGovValidation(){
    var num = document.getElementById("rateGov_field").value;
    if(num>=1 && num<=5){
        End();
    }
    else{
        alert("Please enter a number between 1 and 5");
    }
}
function rateUniValidation(){
    var num = document.getElementById("rateUni_field").value;
    if(num>=1 && num<=5){
        document.getElementById("bursary").style.display = "block";
    }
    else{
        alert("Please enter a number between 1 and 5");
    }
}
function bursaryValidation(str){
    if(str == "no"){
        document.getElementById("info").innerHTML = "Visit <a href='statebursaries.com'>stateBursaries.com</a> to learn more</a>";
        document.getElementById("info").style.display = "block";
        document.getElementById("rateGov").style.display = "block";
    }
    else{
        document.getElementById("info").style.display = "none";
        document.getElementById("rateGov").style.display = "block";
    }
}
function empowermentValidation(str){
  document.getElementById("road").style.display = "block";
}
function taxValidation(){
    document.getElementById("road").style.display = "block";
  }
  function retirementValidation(str){
    document.getElementById("road").style.display = "block";
  }
function roadValidation(){
    var num = document.getElementById("road_field").value;
    if(num>=1 && num<=5){
        document.getElementById("rateGov").style.display="block";
    }
    else{
        alert("Please enter a number between 1 and 5");
    }
}
function End(){
    document.getElementById("info").innerHTML = "<br><br>Thanks for your time";
    document.getElementById("info").style.display = "block";
    
}
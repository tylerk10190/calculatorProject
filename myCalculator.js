

function buttonClick(entry){
  if(entry == null){
    document.getElementById('myScreen').innerHTML = "";
  }
  else if(entry == "="){
    if(document.getElementById('myScreen').innerHTML.includes("/")){
    var myScreenString =  document.getElementById('myScreen').innerHTML.toString();
    var num1 = myScreenString.slice(0,1);
    var num2 = myScreenString.slice(2,3);
    document.getElementById('myScreen').innerHTML = num1 / num2;
    }
  }
  else{
    document.getElementById('myScreen').innerHTML += entry;
  }
}

function addTwoNumbers(num1, num2){
  result = num1 + num2;
  console.log(result)
}



function buttonClick(entry){
  if(entry == null){
    document.getElementById('myScreen').innerHTML = "";
  }
  else if(entry == "="){
    if(document.getElementById('myScreen').innerHTML.includes("/")){
    document.getElementById('myScreen').innerHTML = solve(document.getElementById('myScreen').innerHTML);
    }
    else if(document.getElementById('myScreen').innerHTML.includes("-")){
      document.getElementById('myScreen').innerHTML = solve(document.getElementById('myScreen').innerHTML);
    }
    else if(document.getElementById('myScreen').innerHTML.includes("+")){
      document.getElementById('myScreen').innerHTML = solve(document.getElementById('myScreen').innerHTML);
    }
    else if(document.getElementById('myScreen').innerHTML.includes("x")){
      document.getElementById('myScreen').innerHTML = solve(document.getElementById('myScreen').innerHTML);
    }
  }
    else{
      document.getElementById('myScreen').innerHTML += entry;
    }
  }

function solve(equation){
  if(equation.includes("/")){
  var screenArray = equation.split('/');
  var num1 = screenArray[0];
  var num2 = screenArray[1];
  result = num1 / num2;
}
else if(equation.includes("-")){
var screenArray = equation.split('-');
var num1 = screenArray[0];
var num2 = screenArray[1];
result = num1 - num2;
}
else if(equation.includes("+")){
var screenArray = equation.split('+');
var num1 = screenArray[0];
var num2 = screenArray[1];
result = num1 + num2;
}
else if(equation.includes("x")){
var screenArray = equation.split('x');
var num1 = screenArray[0];
var num2 = screenArray[1];
result = num1 * num2;
}

return result;
}

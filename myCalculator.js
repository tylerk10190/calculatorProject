

function buttonClick(entry){
  if(entry == null){
    document.getElementById('myScreen').innerHTML = "";
  }
  else{
    document.getElementById('myScreen').innerHTML += entry;
  }
}

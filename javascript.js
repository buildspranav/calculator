let display = '';
function reset(){
 display = "";
 document.getElementById("calculations").innerHTML = display;
}
function add(a) {
  display += `${a}`;
  document.getElementById("calculations").innerHTML = display;
}
function remove(){
  display.slice(0,-1);
  document.getElementById("calculations").innerHTML = display;
}
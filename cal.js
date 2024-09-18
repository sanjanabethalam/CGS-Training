var display=document.getElementById("display")
var btns=document.getElementsByClassName("btn")
for (let i=0; i<btns.length;i++){
    btns[i].addEventListener("click",expression)
}
function expression(e){
    var cur = e.target;

    if (cur.innerText === "C") {
        display.value = ""; 
    } else if (cur.innerText === "=") {
        try {
            var result = eval(display.value);
            display.value = result;
        } catch {
            display.value = "Error";
        }
    } else {
        display.value += cur.innerText;
    }
    
}

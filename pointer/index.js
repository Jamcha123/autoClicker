document.getElementById("press").addEventListener("click", func1); 
function func1(){
    let num1 = Math.random() * window.innerWidth + 0; 
    let num2 = Math.random() * window.innerHeight + 0; 
    var boxes = document.createElement("span"); 
    boxes.style.left = num1 + "px";  
    boxes.style.top = num2 + "px";
    document.body.appendChild(boxes)
}
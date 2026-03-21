// ================= DISPLAY =================
function append(value){
  document.getElementById("display").value += value;
}

function clearDisplay(){
  document.getElementById("display").value = "";
}

// ================= CALCULAR =================
function calculate(){
  let display = document.getElementById("display");
  let expression = display.value;

  try{
    if(expression === "") return;

    let result = eval(expression);

    // evitar infinito (ej: dividir por 0)
    if(!isFinite(result)){
      display.value = "Error";
      return;
    }

    addToHistory(expression + " = " + result);

    display.value = result;

  }catch{
    display.value = "Error";
  }
}

// ================= HISTORIAL =================
function addToHistory(text){
  let li = document.createElement("li");
  li.textContent = text;
  document.getElementById("historyList").prepend(li);
}

// ================= BORRAR 1 CHAR =================
function backspace(){
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

// ================= TECLADO =================
document.addEventListener("keydown", function(e){

  let key = e.key;

  if(!isNaN(key) || "+-*/().".includes(key)){
    append(key);
  }

  if(key === "Enter"){
    calculate();
  }

  if(key === "Backspace"){
    backspace();
  }

  if(key === "Escape"){
    clearDisplay();
  }

});

document.querySelector(".menu-toggle").onclick = function(){
  document.querySelector(".menu").classList.toggle("active");
}
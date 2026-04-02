// COPIAR TEXTO
function copiar(texto) {
  navigator.clipboard.writeText(texto);

  const aviso = document.createElement("div");
  aviso.textContent = "Copiado ✔";

  aviso.style.position = "fixed";
  aviso.style.bottom = "20px";
  aviso.style.left = "50%";
  aviso.style.transform = "translateX(-50%)";
  aviso.style.background = "#699C64";
  aviso.style.color = "#fff";
  aviso.style.padding = "10px 20px";
  aviso.style.borderRadius = "10px";

  document.body.appendChild(aviso);

  setTimeout(() => aviso.remove(), 1500);
}

// FILTRO
function filtrar() {
  const input = document.getElementById("search").value.toLowerCase();
  const formulas = document.querySelectorAll(".formula-item");

  formulas.forEach(item => {
    const texto = item.innerText.toLowerCase();
    item.style.display = texto.includes(input) ? "flex" : "none";
  });
}

// MENU
function toggleMenu() {
  document.querySelector('.menu').classList.toggle('active');
}
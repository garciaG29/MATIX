function copiar(texto) {
  navigator.clipboard.writeText(texto);
  alert("Copiado: " + texto);
}

function filtrar() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let texto = card.innerText.toLowerCase();
    card.style.display = texto.includes(input) ? "block" : "none";
  });
}
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let index = 0;
const totalSlides = slides.length;

/* 👉 MOVER SLIDE */
function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;

  // actualizar dots
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

/* SIGUIENTE SLIDE */
function nextSlide() {
  index = (index + 1) % totalSlides;
  updateCarousel();
}


dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    updateCarousel();
  });
});


let interval = setInterval(nextSlide, 5000);

/* PAUSAR AL PASAR EL MOUSE */
const carousel = document.querySelector(".carousel");

carousel.addEventListener("mouseenter", () => {
  clearInterval(interval);
});

carousel.addEventListener("mouseleave", () => {
  interval = setInterval(nextSlide, 5000);
});

/* SWIPE (MÓVIL) */
let startX = 0;
let endX = 0;

carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) {
    nextSlide();
  }

  if (endX - startX > 50) {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }
});

/* CONVERSOR DE MONEDAS */
let inputCop = document.getElementById("inputCop");
let inputUsd = document.getElementById("inputUsd");
let inputEur = document.getElementById("inputEur");

let tasaUSD = 0;
let tasaEUR = 0;
let actualizando = false; // evita loop infinito

// Obtener tasas
async function obtenerTasa() {
    try {
        let response = await fetch("https://api.exchangerate-api.com/v4/latest/COP");
        let data = await response.json();

        tasaUSD = data.rates.USD;
        tasaEUR = data.rates.EUR;

        // ACTUALIZAR AQUÍ (cuando ya tienes datos reales)
        document.getElementById("tasaUsd").innerHTML =
        `<strong>USD</strong><br><small>1 COP → ${tasaUSD.toFixed(6)}</small>`;

        document.getElementById("tasaEur").innerHTML =
        `<strong>EUR</strong><br><small>1 COP → ${tasaEUR.toFixed(6)}</small>`;

    } catch (error) {
        console.error("Error al obtener tasa", error);
    }
}

obtenerTasa();

// Formateadores
const formatoCOP = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP"
});

const formatoUSD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});

const formatoEUR = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR"
});

// Limpiar número
function limpiarNumero(valor) {
    return parseFloat(valor.replace(/\./g, "").replace(",", "."));
}

// =======================
// COP → USD y EUR
// =======================
inputCop.addEventListener("input", function () {
    if (actualizando) return;

    let num = limpiarNumero(this.value);
    if (isNaN(num)) return;

    actualizando = true;

    let usd = num * tasaUSD;
    let eur = num * tasaEUR;

    inputUsd.value = formatoUSD.format(usd);
    inputEur.value = formatoEUR.format(eur);

    actualizando = false;
});

// =======================
// USD → COP y EUR
// =======================
inputUsd.addEventListener("input", function () {
    if (actualizando) return;

    let num = limpiarNumero(this.value);
    if (isNaN(num)) return;

    actualizando = true;

    let cop = num / tasaUSD;
    let eur = cop * tasaEUR;

    inputCop.value = formatoCOP.format(cop);
    inputEur.value = formatoEUR.format(eur);

    actualizando = false;
});

// =======================
// EUR → COP y USD
// =======================
inputEur.addEventListener("input", function () {
    if (actualizando) return;

    let num = limpiarNumero(this.value);
    if (isNaN(num)) return;

    actualizando = true;

    let cop = num / tasaEUR;
    let usd = cop * tasaUSD;

    inputCop.value = formatoCOP.format(cop);
    inputUsd.value = formatoUSD.format(usd);

    actualizando = false;
});
document.getElementById("tasaUsd").innerText =
    `USD: ${tasaUSD.toFixed(6)}`;

document.getElementById("tasaEur").innerText =
    `EUR: ${tasaEUR.toFixed(6)}`;
    
    document.querySelector(".menu-toggle")
.addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("active");
});
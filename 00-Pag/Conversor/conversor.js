/* =========================
   CAROUSEL (SIN CAMBIOS)
========================= */
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let index = 0;
const totalSlides = slides.length;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

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

const carousel = document.querySelector(".carousel");

carousel.addEventListener("mouseenter", () => clearInterval(interval));
carousel.addEventListener("mouseleave", () => {
  interval = setInterval(nextSlide, 5000);
});

let startX = 0;
let endX = 0;

carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) nextSlide();

  if (endX - startX > 50) {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }
});

/* =========================
   CONVERSOR FINAL 🔥
========================= */

// Inputs
let inputCop = document.getElementById("inputCop");
let inputUsd = document.getElementById("inputUsd");
let inputEur = document.getElementById("inputEur");
let inputMxn = document.getElementById("inputMxn");
let inputArs = document.getElementById("inputArs");
let inputGbp = document.getElementById("inputGbp");
let inputBtc = document.getElementById("inputBtc");

// Tasas
let tasas = {
    USD: null,
    EUR: null,
    MXN: null,
    ARS: null,
    GBP: null,
    BTC: null
};

let actualizando = false;

/* =========================
   OBTENER TASAS
========================= */
async function obtenerTasa() {
    try {
        let res = await fetch("https://api.exchangerate-api.com/v4/latest/COP");
        let data = await res.json();

        tasas.USD = data.rates.USD;
        tasas.EUR = data.rates.EUR;
        tasas.MXN = data.rates.MXN;
        tasas.ARS = data.rates.ARS;
        tasas.GBP = data.rates.GBP;

        let btcRes = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=cop");
        let btcData = await btcRes.json();

        if (btcData.bitcoin) {
            tasas.BTC = 1 / btcData.bitcoin.cop;
        }

        document.getElementById("tasaUsd").innerHTML =
        `<strong>USD</strong><br><small>1 COP → ${tasas.USD.toFixed(6)}</small>`;

        document.getElementById("tasaEur").innerHTML =
        `<strong>EUR</strong><br><small>1 COP → ${tasas.EUR.toFixed(6)}</small>`;

    } catch (error) {
        console.error("Error obteniendo tasas", error);
    }
}

obtenerTasa();

/* =========================
   UTILIDADES
========================= */
function limpiarNumero(valor) {
    if (!valor) return NaN;
    valor = valor.replace(/\./g, "").replace(",", ".");
    return parseFloat(valor);
}

function formatearNumero(num) {
    if (isNaN(num)) return "";

    return new Intl.NumberFormat("es-CO", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(num);
}

function convertirDesdeCOP(cop) {
    return {
        USD: tasas.USD ? cop * tasas.USD : "",
        EUR: tasas.EUR ? cop * tasas.EUR : "",
        MXN: tasas.MXN ? cop * tasas.MXN : "",
        ARS: tasas.ARS ? cop * tasas.ARS : "",
        GBP: tasas.GBP ? cop * tasas.GBP : "",
        BTC: tasas.BTC ? cop * tasas.BTC : ""
    };
}

/* 🔥 FUNCIÓN CORREGIDA */
function actualizarCampos(cop, origen) {
    let r = convertirDesdeCOP(cop);

    if (origen !== "COP") inputCop.value = formatearNumero(cop);
    if (origen !== "USD") inputUsd.value = formatearNumero(r.USD);
    if (origen !== "EUR") inputEur.value = formatearNumero(r.EUR);
    if (origen !== "MXN") inputMxn.value = formatearNumero(r.MXN);
    if (origen !== "ARS") inputArs.value = formatearNumero(r.ARS);
    if (origen !== "GBP") inputGbp.value = formatearNumero(r.GBP);
    if (origen !== "BTC") inputBtc.value = formatearNumero(r.BTC);
}

/* =========================
   EVENTOS (SIN BUG)
========================= */

inputCop.addEventListener("input", function () {
    if (actualizando) return;

    let cop = limpiarNumero(this.value);
    if (isNaN(cop)) return;

    actualizando = true;
    actualizarCampos(cop, "COP");
    actualizando = false;
});

inputUsd.addEventListener("input", function () {
    if (actualizando || !tasas.USD) return;

    let usd = limpiarNumero(this.value);
    if (isNaN(usd)) return;

    actualizando = true;
    actualizarCampos(usd / tasas.USD, "USD");
    actualizando = false;
});

inputEur.addEventListener("input", function () {
    if (actualizando || !tasas.EUR) return;

    let eur = limpiarNumero(this.value);
    if (isNaN(eur)) return;

    actualizando = true;
    actualizarCampos(eur / tasas.EUR, "EUR");
    actualizando = false;
});

inputMxn.addEventListener("input", function () {
    if (actualizando || !tasas.MXN) return;

    let mxn = limpiarNumero(this.value);
    if (isNaN(mxn)) return;

    actualizando = true;
    actualizarCampos(mxn / tasas.MXN, "MXN");
    actualizando = false;
});

inputArs.addEventListener("input", function () {
    if (actualizando || !tasas.ARS) return;

    let ars = limpiarNumero(this.value);
    if (isNaN(ars)) return;

    actualizando = true;
    actualizarCampos(ars / tasas.ARS, "ARS");
    actualizando = false;
});

inputGbp.addEventListener("input", function () {
    if (actualizando || !tasas.GBP) return;

    let gbp = limpiarNumero(this.value);
    if (isNaN(gbp)) return;

    actualizando = true;
    actualizarCampos(gbp / tasas.GBP, "GBP");
    actualizando = false;
});

inputBtc.addEventListener("input", function () {
    if (actualizando || !tasas.BTC) return;

    let btc = parseFloat(this.value);
    if (isNaN(btc)) return;

    actualizando = true;
    actualizarCampos(btc / tasas.BTC, "BTC");
    actualizando = false;
});

/* =========================
   FORMATO AL SALIR 🔥
========================= */
function formatearAlSalir(input) {
    let numero = limpiarNumero(input.value);
    if (isNaN(numero)) return;

    input.value = formatearNumero(numero);
}

inputCop.addEventListener("blur", () => formatearAlSalir(inputCop));
inputUsd.addEventListener("blur", () => formatearAlSalir(inputUsd));
inputEur.addEventListener("blur", () => formatearAlSalir(inputEur));
inputMxn.addEventListener("blur", () => formatearAlSalir(inputMxn));
inputArs.addEventListener("blur", () => formatearAlSalir(inputArs));
inputGbp.addEventListener("blur", () => formatearAlSalir(inputGbp));
inputBtc.addEventListener("blur", () => formatearAlSalir(inputBtc));

/* =========================
   MENU
========================= */
document.querySelector(".menu-toggle")
.addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("active");
});
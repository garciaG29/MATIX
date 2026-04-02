// NAV MOBILE
function toggleMenu() {
  document.querySelector('.menu').classList.toggle('active');
}

// EMAILJS INIT
(function(){
  emailjs.init("TU_PUBLIC_KEY"); // 🔥 CAMBIA ESTO
})();

// ANIMACIONES
window.addEventListener("load", () => {
  document.querySelectorAll('.profile-card, .form-card')
    .forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        el.style.transition = "0.6s ease";
      }, i * 200);
    });
});

// FORMULARIO
document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();

  let name = this.name.value.trim();
  let email = this.email.value.trim();
  let message = this.message.value.trim();

  // VALIDACIÓN
  if(name.length < 3){
    alert("Nombre muy corto");
    return;
  }

  if(!email.includes("@")){
    alert("Email inválido");
    return;
  }

  if(message.length < 10){
    alert("Mensaje muy corto");
    return;
  }

  // ENVÍO
  emailjs.sendForm("TU_SERVICE_ID", "TU_TEMPLATE_ID", this)
    .then(() => {
      alert("Mensaje enviado 🚀");
      this.reset();
    })
    .catch(() => {
      alert("Error al enviar ❌");
    });

});
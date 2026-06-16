// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Animación al aparecer
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});

const botonTema = document.getElementById("toggleTema");

botonTema.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    botonTema.textContent = "☀️";
  } else {
    botonTema.textContent = "🌙";
  }
});
function copiarEmail() {
  const email = document.getElementById("email").textContent;
  navigator.clipboard.writeText(email);

  const btn = document.querySelector(".contacto-item button");
  btn.textContent = "✔️";

  setTimeout(() => {
    btn.textContent = "📋";
  }, 1500);
}
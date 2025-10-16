// Alterna entre modo claro y oscuro
const btnTema = document.getElementById("btn-tema");

btnTema.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Cambiar texto del botón según el modo
  if (document.body.classList.contains("dark-mode")) {
    btnTema.textContent = "Modo Claro";
  } else {
    btnTema.textContent = "Cambiar Tema";
  }
});

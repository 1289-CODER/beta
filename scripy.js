function mostrarDetalles(boton) {
  const detalles = boton.nextElementSibling;
  if (detalles.style.display === "none") {
    detalles.style.display = "block";
    boton.textContent = "Ocultar";
  } else {
    detalles.style.display = "none";
    boton.textContent = "Detalles";
  }
}

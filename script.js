
document.addEventListener("DOMContentLoaded", () => {
  const contenu = document.querySelector("main");

  if (contenu) {
    requestAnimationFrame(() => {
      contenu.classList.add("visible");
    });
  }

  const bouton = document.querySelector(".bouton");

  if (bouton) {
    bouton.addEventListener("mouseenter", () => {
      bouton.style.letterSpacing = "0.5px";
    });

    bouton.addEventListener("mouseleave", () => {
      bouton.style.letterSpacing = "0px";
    });
  }
});

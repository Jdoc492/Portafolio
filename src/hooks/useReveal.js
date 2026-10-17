import { useEffect } from "react";

// Agrega la clase "is-visible" a los elementos [data-reveal] cuando entran en pantalla
export const useReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    // Si se entra con un enlace a una sección (ej. /#projects), ir a ella cuando ya exista
    const target = window.location.hash && document.querySelector(window.location.hash);
    if (target) target.scrollIntoView();

    return () => observer.disconnect();
  }, []);
};

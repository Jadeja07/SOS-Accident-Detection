document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-item").forEach(link => {
    if (link.href === window.location.href) {
      link.style.color = "#00e5ff";
      link.style.fontWeight = "700";
    }
  });
});

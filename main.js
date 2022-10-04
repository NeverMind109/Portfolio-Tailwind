const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  if (mobileMenu.classList.contains("flex")) {
    mobileMenu.classList.remove("flex");
    mobileMenu.classList.add("hidden");
  } else {
    mobileMenu.classList.add("flex");
    mobileMenu.classList.remove("hidden");
  }
});

function updateList() {
  const titles = [...document.querySelectorAll("h1, h2")].sort((a, b) => {
    return (
      Math.abs(a.getBoundingClientRect().top) -
      Math.abs(b.getBoundingClientRect().top)
    );
  });

  document
    .querySelectorAll(".selected-circle")
    .forEach((c) => c.classList.remove("selected-circle"));

  document
    .querySelectorAll(".nav-dot")
    [[...document.querySelectorAll("h1, h2")].indexOf(titles[0])].classList.add(
      "selected-circle"
    );
}

updateList();
window.addEventListener("scroll", () => {
  updateList();
});

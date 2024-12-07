export const showMenu = () => {
  const toggle = document.getElementById("main-toggle");
  const menu = document.getElementById("main-menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
    toggle.classList.toggle("closed");
  });

  console.log(menu);
};

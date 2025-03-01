// Меню-бургер
// Открытие/закрытие, анимация кнопки-бургера (превращение в крестик), отключение скролла для сайта. Убираем дергание при исчезновении скролла.

function headerBurgerMenu() {
  const header = document.querySelector("#header");
  const headerMenu = document.querySelector("#header-menu");
  const headerMenuIcon = document.querySelector("#header-btn-show-menu");
  const headerBtnCloseMenu = document.querySelector("#header-btn-close-menu");
  const body = document.body;

  headerMenuIcon.addEventListener("click", openMenu);

  function openMenu() {
    headerMenu.classList.add("_menu-open");
    const scrollWidth =
      window.innerWidth - document.documentElement.clientWidth + "px";
    body.style.paddingRight = scrollWidth;
    header.style.paddingRight = scrollWidth;
    body.classList.add("_lock");
  }

  headerBtnCloseMenu.addEventListener("click", closeHeaderMenu);

  function closeHeaderMenu() {
    headerMenu.classList.remove("_menu-open");
    body.removeAttribute("style");
    header.removeAttribute("style");
    body.classList.remove("_lock");
  }

  document.addEventListener("keydown", closeHeaderMenu2);

  function closeHeaderMenu2(event) {
    if (event.code == "Escape") {
      headerMenu.classList.remove("_menu-open");
      body.classList.remove("_lock");
      body.removeAttribute("style");
      header.removeAttribute("style");
    }
  }

  headerMenu.addEventListener("click", closeHeaderMenu3);

  function closeHeaderMenu3(event) {
    if (
      !event.target.closest("#header-menu-list") ||
      event.target.closest("#header-menu-list a") ||
      event.target.closest("#header-menu-list button")
    ) {
      headerMenu.classList.remove("_menu-open");
      headerMenuIcon.classList.remove("_menu-open");
      body.classList.remove("_lock");
      body.removeAttribute("style");
      header.removeAttribute("style");
    }
  }
}

export default headerBurgerMenu;

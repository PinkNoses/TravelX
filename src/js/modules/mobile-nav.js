function mobileNav() {
  // Mobile nav button
  const navBtnOpen = document.querySelector("#modalOpen");
  const navBtnClose = document.querySelector("#modalClose");

  const nav = document.querySelector("#mobileNav");
  const navOverlay = document.querySelector("#mobileNavOverlay");

  navBtnOpen.onclick = toggleMobileNav;
  navBtnClose.onclick = toggleMobileNav;
  navOverlay.onclick = toggleMobileNav;

  function toggleMobileNav() {
    navOverlay.classList.toggle("mobile-nav-overlay--open");
    nav.classList.toggle("mobile-nav--open");
    document.body.classList.toggle("no-scroll");
  }
}

export default mobileNav;

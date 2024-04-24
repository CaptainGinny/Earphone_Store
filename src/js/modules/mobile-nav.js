function mobileNav() {
  const navBtnOpen = document.querySelector('#mobile-nav-btn');
  const navBtnClose = document.querySelector('#close-mobile__nav');
  const mobileNavFade = document.querySelector('.mobile-nav__fade');
  const nav = document.querySelector('.mobile-nav');

  navBtnOpen.onclick = function () {
    nav.classList.toggle('mobile-nav--open');
    mobileNavFade.classList.toggle('mobile-nav__fade--open');
    document.body.classList.toggle('no-scroll');
  };

  navBtnClose.onclick = function () {
    nav.classList.remove('mobile-nav--open');
    mobileNavFade.classList.remove('mobile-nav__fade--open');
    document.body.classList.toggle('no-scroll');
  };

  mobileNavFade.onclick = function () {
    nav.classList.remove('mobile-nav--open');
    mobileNavFade.classList.remove('mobile-nav__fade--open');
    document.body.classList.toggle('no-scroll');
  };
}

export default mobileNav;

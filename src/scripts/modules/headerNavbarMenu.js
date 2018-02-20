class HeaderNavBarMenu {

  constructor() {
    console.log('>>> headerNavbarMenu.js ready!');

    // Call methods
    this.menu();
  }

  menu() {

    // Show/hide menu mobile
    function showHideMenuMobile() {

      const menu = $('#header-menu');
      const menuToggle = $('#menu-toggle');
      const menuLinks = $('.header-menu > .list > .item > .link');

      menuToggle.on('click', () => {
        menu.toggleClass('-open');
        menuToggle.toggleClass('-open');
      });

      menuLinks.on('click', () => {
        menu.removeClass('-open');
        menuToggle.removeClass('-open');
      });

    }

    // Scroll NavBar Menu animation
    function scrollNavBarAnim() {

      const headerLogo = $('#header-logo');
      const headerMenuToggle = $('#menu-toggle');
      const scrollPos = window.scrollY;

      if (scrollPos >= 380) {
        headerLogo.addClass('-small');
        headerMenuToggle.addClass('-small');
      } else {
        headerLogo.removeClass('-small');
        headerMenuToggle.removeClass('-small');
      }

    }

    // Call functions
    showHideMenuMobile();
    $(window).scroll(scrollNavBarAnim);

  }

}

export default HeaderNavBarMenu;

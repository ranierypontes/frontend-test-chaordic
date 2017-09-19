class Menu {

    constructor() {
      console.log('>>> Menu constructor');
      // Call methods
      this.init();
    }

    init() {
      const menutoggle = $('.menu-toggle');
      const menu = $('.header-menu');
      const main = $('.main');
      const footer = $('.footer');

      menutoggle.on('click', function () {
        if (menu.hasClass('-open')) {
          menu.removeClass('-open');
          main.removeClass('-blur');
          footer.removeClass('-blur');
        } else {
          menu.addClass('-open');
          main.addClass('-blur');
          footer.addClass('-blur');
        }
      });
    }

  }

  export default Menu;

class Menu {

    constructor() {
      console.log('>>> Menu constructor');
      // Call methods
      this.init();
    }

    init() {
      const menutoggle = $('.menu-toggle');
      const menu = $('.header-menu');

      menutoggle.on('click', function () {
        if (menu.hasClass('-open')) {
          menu.addClass('-close');
          menu.removeClass('-open');
        } else {
          menu.addClass('-open');
          menu.removeClass('-close');
        }
      });
    }

  }

  export default Menu;

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
      menutoggle.toggleClass('-open');
      menu.toggleClass('-open');
    });
  }

}

export default Menu;

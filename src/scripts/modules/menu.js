class Menu {

  constructor() {
    console.log('>>> Menu constructor');
    // Call methods
    this.openMenu();
  }

  openMenu() {
    const menutoggle = $('.menu-toggle');
    const menu = $('.header-menu');

    menutoggle.on('click', () => {
      menutoggle.toggleClass('-open');
      menu.toggleClass('-open');
    });
  }

}

export default Menu;

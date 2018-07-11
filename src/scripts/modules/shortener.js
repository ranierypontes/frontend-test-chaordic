class Shortener {
  constructor() {
    // Call methods
    this.init();
  }

  init() {
    const form = document.querySelector('.shorten-links');
    const btn = document.querySelector('.shorten-links>.btn');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('test!');
    });
  }
}

export default Shortener;

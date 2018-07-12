class Shortener {
  constructor() {
    // Call methods
    this.init();
  }

  init() {
    const form = document.querySelector('.shorten-links');
    const input = document.querySelector('.shorten-links > .inputbox > .input');
    const cancel = document.querySelector('.shorten-links > .inputbox > .icon');
    const btn = document.querySelector('.shorten-links > .btn');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      input.classList.add('-short');
      btn.classList.add('-short');
      setTimeout(() => {
        btn.innerHTML = 'Copiar';
        input.value = 'http://chr.dc/xyzxyz';
        input.setAttribute('readonly', true);
        btn.classList.remove('-short');
        cancel.style.display = 'unset';
      }, 500);
    });

    cancel.addEventListener('click', () => {
      input.value = '';
      input.classList.remove('-short');
      cancel.style.display = 'none';
      btn.innerHTML = 'Encurtar';
      input.removeAttribute('readonly');
    });
  }
}

export default Shortener;

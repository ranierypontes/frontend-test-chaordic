class SlideAnother {

  constructor() {
    console.log('>>> SlideAnother constructor');
    // Call methods
    this.init();
  }

  init() {
    const slideAnother = new Swiper('.slide-container-another', {
      slidesPerView: 3,
      spaceBetween: 5,
      autoplay: 900,
      speed: 600,
      autoplayDisableOnInteraction: false,
      loop: true,
      // effect: 'fade',
      prevButton: '.slide-prev-another',
      nextButton: '.slide-next-another',
      pagination: '.slide-pagination-another',
      bulletClass: 'slide-pagination-bullet-another',
      bulletActiveClass: 'slide-pagination-bullet-another-active',
      paginationClickable: true,
      // paginationBulletRender: function (swiper, index, className) {
      //   return '<span class="' + className + '">' + (index + 1) + '</span>';
      // },
      breakpoints: {
        992: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 2,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });
  }

}

export default SlideAnother;

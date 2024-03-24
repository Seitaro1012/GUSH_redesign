class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this.__initSwiper();
  }

  __initSwiper() {
    return new Swiper(this.el, {

      loop: true,
      grabCursor: true,
      effect: 'fade',

      slidesPerView: 4,
      speed: 1000,
    });
  }

  start(options = {}) {
    options = Object.assign({
      delay: 4300,
      disableOnInteraction: false
    }, options);

    this.swiper.params.autoplay =
      options;
    this.swiper.autoplay.start();
  }

}

class HeroSliders {
  constructor(el) {
    this.el = el;
    this.swiper = this.__initSwiper();
  }

  __initSwiper() {
    return new Swiper(this.el, {
      loop: true,
      grabCursor: true,
      effect: 'slide',
      slidesPerView: 3.5,
      spaceBetween: 10,
      speed: 1000,
    });
  }

  start(options = {}) {
    options = Object.assign({
      delay: 4000,
      disableOnInteraction: false
    }, options);
    this.swiper.params.autoplay =
      options;
    this.swiper.autoplay.start();
  }
}




document.addEventListener('DOMContentLoaded', function(){
  const hero = new HeroSlider('#swiper');
  hero.start();
});

document.addEventListener('DOMContentLoaded', function() {
  const hero = new HeroSliders('#swipers');
  hero.start();
});

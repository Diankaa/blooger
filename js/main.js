/** click event on toggle menu */

$('.nav-toggle').click(() => {
  $('html').toggleClass("open");
});

 // owl-crousel for blog
 
 const responsive = {
  0: {
      items: 1
  },
  320: {
      items: 1
  },
  560: {
      items: 2
  },
  960: {
      items: 3
  }
}

 $('.owl-carousel').owlCarousel({
  loop: true,
  autoplay: false,
  autoplayTimeout: 3000,
  dots: false,
  nav: true,
  navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
  responsive: responsive
});

// AOS 
AOS.init();

// scroll
const scrollWindow = () => {
  $(window).scroll(() => {
    const $w = $(window);
    const st = $w.scrollTop();
    const nav = $('.nav');
    if (st > 150) {
      if (!nav.hasClass('scrolled')) {
        nav.addClass('scrolled');
      }
    }
    if (st < 150) {
      if (nav.hasClass('scrolled')) {
        nav.removeClass('scrolled sleep');
      }
    }
    if (st > 350) {
      if (!nav.hasClass('awake')) {
        nav.addClass('awake');
      }
    }
    if (st < 350) {
      if (nav.hasClass('awake')) {
        nav.removeClass('awake');
        nav.addClass('sleep');
      }
    }
  });
};

scrollWindow();


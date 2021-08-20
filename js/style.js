$('.feedback-slider-comment').slick({
  draggable: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  speed: 1000,
  prevArrow: '<button class="slick-arrow prev-arrow"><i class="fas fa-chevron-circle-left"></i></button>',
  nextArrow: '<button class="slick-arrow next-arrow"><i class="fas fa-chevron-circle-right"></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

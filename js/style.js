$(document).ready(function () {
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
 
  $('[data-toggle="popover"]').popover();

  $(".nav-tabs a").click(function () {
    $(this).tab('show');
  });

  var chatbox = document.getElementById('fb-customer-chat');
  chatbox.setAttribute("page_id", "108828021517439");
  chatbox.setAttribute("attribution", "biz_inbox");

  window.fbAsyncInit = function () {
    FB.init({
      xfbml: true,
      version: 'v11.0'
    });
  };

  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
});

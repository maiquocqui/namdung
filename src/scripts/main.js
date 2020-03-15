$(document).ready(function () {
  $('.page-name').text($('.breadcrumb').children('li:nth-child(2)').text())

  $('.btn-menu').click(() => {
    $('.btn-menu').toggleClass('active');
    $('.menu-block').toggleClass('open');
  })

  $('.sidebar-title').click(() => {
    $('.sidebar ul').slideToggle(300);
  })

  $(".banner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: false,
    arrows: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true
  });

  $('.partner-slide').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });

  $('.product-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: false,
    asNavFor: '.product-nav'
  });
  $('.product-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    asNavFor: '.product-slide',
    focusOnSelect: true
  });

  $('.related-slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });

  if ($(window).width() < 1200) {
    $('.language').insertAfter($('.search'))
  }

  $('.last .solution-item').height($('.last .solution-item').width())
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 300) {
    //clearHeader, not clearheader - caps H
    $("header").addClass("active");
  } else {
    $("header").removeClass("active");
  }
});

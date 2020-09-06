//=../../../../node_modules/slick-carousel/slick/slick.js
var portfolio = $('#portfolio');
portfolio.slick({

    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    infinite: true,
    dots: true,

    speed: 500,

     
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 320,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  });
 
  $("#portfolio__arrow--prev").on("click", function(event) {
          event.preventDefault();
          portfolio.slick('slickPrev');
  });

  $("#portfolio__arrow--next").on("click", function(event) {
    event.preventDefault();
    portfolio.slick('slickNext');
});

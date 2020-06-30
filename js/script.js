window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav__menu'),
    menuItem = document.querySelectorAll('.nav__menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav__menu_active');
        })
    })
    
});
$(document).ready(function(){
    $('.reviews__inner').slick({
        centerMode: true,
        centerPadding: '10px',
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              dots: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 567,
            settings: {
              arrows: false,
              dots: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1

            }
          }
        ]
      });


      function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.price__item-content').eq(i).toggleClass('price__item-content_active');
                $('.price__item-list').eq(i).toggleClass('price__item-list_active');
            })
        });
    };

    toggleSlide('.price__item-link');
    toggleSlide('.price__item-back');  

    
    function valideForms(form){
      $(form). validate({
          rules: {
              name: "required",
              phone: "required",
              email: {
                required: true,
                email: true
              }
            },
            messages: {
              name: "Введите свое имя",
              phone: "Введите свое телефон",
              email: {
                required: "Введите свою почту",
                email: "Обмануть не получится"
              }
            }
  
      });
  };
  valideForms('#consultation-form');
  valideForms('#order');

  $('input[name=phone]').mask("+7 (999) 999-99-99");

      // scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
        $('.pageup').fadeIn();
    } else{
        $('.pageup').fadeOut();
    }
  });

  $("a[href=#up]").click(function(){
    const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"up"});
      return false;
});
  new WOW().init();
});

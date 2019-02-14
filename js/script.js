$(document).ready(function(){
  // header height
  // function heightDetect(){
  //   $('.header').css('min-height', $(window).height());
  // }
  // heightDetect();
  // $(window).resize(function(){
  //   heightDetect();
  // });
  $('.menu__item a[href^="#"], .project__btn, .header__btn_portfolio').on('click', function () {
    if ($(window).width() >= 767) {
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 80}, 1000);
    } else {
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 50}, 1000);
    }
  });
  // humburger menu
  $('.humburger__logo').click(function(){
    $(this).toggleClass('open');
    $('.menu').toggleClass('menu_active');
    $('body').toggleClass('body_fixed');
  });
  $('.menu__link').click(function(){
    $('.menu_active').removeClass('menu_active');
    $('.humburger__logo').removeClass('open');
    $('body').removeClass('body_fixed');
  });
  // slider
  var carousel = $('#portfolioSlider').waterwheelCarousel({
    flankingItems: 1,
    separation: 300
  });
  $('#portfolioPrev').bind('click', function(){
    carousel.prev();
    return false;
  });
  $('#portfolioNext').bind('click', function(){
    carousel.next();
    return false;
  });
  var viewportWidth = $(window).width();
    if (viewportWidth <= 991) {
    carousel.reload({
      flankingItems: 0,
      separation: 0
    });
    // $('.slider img') = viewportWidth;
  }
  // reviews slider
  $('.slider__wrap').cycle({
    slides: '> .slider__item',
    fx: 'scrollHorz',
    speed: '500',
    timeout: '10000',
    prev: '.prev',
    next: '.next',
    pager:'.reviews__users',
    pagerActiveClass: 'active'
  });
  // form validation
  $('.modal__button').click(function(){
    var name = $('#userName').val();
    var phone = $('#userPhone').val();
    var message = 'Имя ='+ name + 'Телефон =' + phone;
    if(name === '' || phone === ''){
      $('.error').html('* Ошибка! Поле обязательное для заполнения!')
    } else {
    }
    $('.form_modal').submit(function() {
      $.ajax({
        type:"POST",
        url:"../form.php",
        data: message,
        success: function(){
          $('.sucsess__wrapper').css('display' , 'block');
          }
        })
        return false;
    });
  });
});
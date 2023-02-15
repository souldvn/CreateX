$(function () {
  var mixer = mixitup(".directions__list");
  $(".directions__filter-btn").on("click", function () {
    $(".directions__filter-btn").removeClass("directions__filter-btn--active");
    $(this).addClass("directions__filter-btn--active");
  });

  $(".team__slider").slick({
    arrows: false,
    slidesToShow: 4,
    Infinite: true,
    draggable: false,
    waitForAnimate: false,
  });

  $(".team__slider-prev").on("click", function (e) {
    e.preventDefault();
    $(".team__slider").slick("slickPrev");
  });

  $(".team__slider-next").on("click", function (e) {
    e.preventDefault();
    $(".team__slider").slick("slickNext");
  });

  $(".testimonials__slider").slick({
    arrows: false,
    dots: true,
    appendDots: ".testimonials__dots",
  });

  // ======================TESTIMONIALS=============================================================

  $(".testimonials__prev").on("click", function (e) {
    e.preventDefault();
    $(".testimonials__slider").slick("slickPrev");
  });

  $(".testimonials__next").on("click", function (e) {
    e.preventDefault();
    $(".testimonials__slider").slick("slickNext");
  });

  // ======================PROGRAM=============================================================

  // $('.programm__acc-link').on('click', function(e){
  //   e.preventDefault();
  //   $(this).toggleClass('programm__acc-link--active');
  //   $(this).children('.programm__acc-text').slideToggle()
  // });

  $(".programm__acc-link").on("click", function (e) {
    e.preventDefault();
    // $(".programm__acc-link").removeClass("programm__acc-link--active");
    // $(".programm__acc-text").slideUp();
    // $(this).toggleClass("programm__acc-link--active");
    // $(this).children(".programm__acc-text").slideDown();
    if ($(this).hasClass("programm__acc-link--active")) {
      $(this).removeClass("programm__acc-link--active");
      $(this).children(".programm__acc-text").slideUp();
    } else {
      $(".programm__acc-link").removeClass("programm__acc-link--active");
      $(".programm__acc-text").slideUp();
      $(this).addClass("programm__acc-link--active");
      $(this).children(".programm__acc-text").slideDown();
    }
  });

  $(".header__nav-list a, .header__top-btn, .footer__go-top").on(
    "click",
    function (event) {
      //отменяем стандартную обработку нажатия по ссылке

      event.preventDefault();

      //забираем идентификатор бока с атрибута href

      var id = $(this).attr("href"),
        //узнаем высоту от начала страницы до блока на который ссылается якорь

        top = $(id).offset().top - 200;

      //анимируем переход на расстояние - top за 1500 мс

      $("body,html").animate({ scrollTop: top }, 1500);
    }
  );
});

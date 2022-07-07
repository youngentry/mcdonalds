$(function () {
  $("html, body").on("mousewheel", function (e) {
    var d = e.originalEvent.deltaY;
    if (d > 0) {
      $(".header").addClass("on");
      // console.log("내림");
    } else if (d < 0) {
      $(".header").removeClass("on");
      // console.log("올림");
    }
  });

  function video(videoClass, videoURL, containmentClass, startAtTime, stopAtTime, playType) {
    $(videoClass).YTPlayer({
      videoURL: videoURL,
      containment: containmentClass,
      autoPlay: playType,
      mute: true,
      startAt: 0,
      stopAt: stopAtTime,
      opacity: 1,
      showControls: false,
      stopMovieOnBlur: false,
      playOnlyIfVisible: false,
      startAt: startAtTime,
    });
  }

  video(".bgVideo01", "https://youtu.be/u2hLpzjQgvc", ".slider01", 15, 30, true);
  video(".bgVideo02", "https://youtu.be/MNL6IMZEJ0g", ".slider02", 0, 15, false);
  video(".bgVideo03", "https://youtu.be/MyVoER9Q-xk", ".slider03", 15, 30, false);

  $(".mainSlider").on("afterChange", (e, s, c) => {
    $(`.bgVideo0${c + 1}`).YTPPlay();
    $(`.bgVideo0${((c + 1) % 3) + 1}`).YTPPause();
    $(`.bgVideo0${((c + 2) % 3) + 1}`).YTPPause();
    $(".mainSlider .slick-dots li").eq(c).addClass("on").siblings().removeClass("on");
  });

  $(".mainSlider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 15000,
    fade: true,
  });
  $(".mainSlider .slick-dots li").eq(0).addClass("on");

  $(".sliderBtn i").on("click", function () {
    $(this).parent().toggleClass("on");
  });

  $(".mealSliderM").slick({
    asNavFor: ".mealSliderS",
    slidesToShow: 1,
    fade: true,
    arrows: false,
    swipe: false,
    waitForAnimate: false,
  });
  $(".mealSliderS").slick({
    asNavFor: ".mealSliderM",
    slidesToShow: 5,
    swipeToSlide: true,
    focusOnSelect: true,
  });

  $(".process .textSlider").slick({
    slidesToShow: 1,
  });
  $(".process .rowSlider01").slick({
    slidesToShow: 3,
    arrows: false,
  });
  $(".process .rowSlider02").slick({
    slidesToShow: 3,
    rtl: true,
    arrows: false,
  });
  $(".process .rowSlider03").slick({
    slidesToShow: 3,
    arrows: false,
  });

  $(".textSlider .slick-prev").on("click", () => {
    $(".rowSlider01, .rowSlider02, .rowSlider03").slick("slickPrev");
  });
  $(".textSlider .slick-next").on("click", () => {
    $(".rowSlider01, .rowSlider02, .rowSlider03").slick("slickNext");
  });
  $(".textSlider .slick-next").on("click", () => {});

  $(".pageNums li a").on("click", function (e) {
    e.preventDefault();
    $(this).parent().siblings().removeClass("on");
    $(this).parent().addClass("on");
    var idx = $(this).parent().index();
    $(".promoPages>div").removeClass("on");
    $(".promoPages>div").eq(idx).addClass("on");
  });

  $(window).on("scroll", () => {
    var screenHeight = $(window).scrollTop();
    // console.log(screenHeight);
    var brandHeight = 1600;
    screenHeight >= brandHeight ? $(".promoPages .top li").addClass("on") : $(".promoPages .top li").removeClass("on");
    screenHeight >= brandHeight + 300 ? $(".promoPages .bottom li").addClass("on") : $(".promoPages .bottom li").removeClass("on");
  });
});

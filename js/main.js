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

  function video(videoClass, videoURL, containmentClass, startAtTime, stopAtTime) {
    $(videoClass).YTPlayer({
      videoURL: videoURL,
      containment: containmentClass,
      autoPlay: false,
      mute: true,
      startAt: 0,
      stopAt: stopAtTime,
      opacity: 1,
      showControls: false,
      stopMovieOnBlur: false,
      playOnlyIfVisible: true,
      startAt: startAtTime,
    });
  }
  video(".bgVideo01", "https://youtu.be/u2hLpzjQgvc", ".slider01", 16, 30);
  video(".bgVideo02", "https://youtu.be/MNL6IMZEJ0g", ".slider02", 1, 15);
  video(".bgVideo03", "https://youtu.be/MyVoER9Q-xk", ".slider03", 16, 30);
  $(".mainSlider").on("afterChange", (e, s, c) => {
    //$(".bgVideo").YTPPause();
    $(`.bgVideo0${c + 1}`).YTPPlay();
    // $(`.bgVideo0${((c + 1) % 3) + 1}`).YTPPause();
    // $(`.bgVideo0${((c + 2) % 3) + 1}`).YTPPause();

    // if (c == 0) {
    //   $(".bgVideo01").YTPPlay();
    //   $(".bgVideo02").YTPPause();
    //   $(".bgVideo03").YTPPause();
    // } else if (c == 1) {
    //   $(".bgVideo01").YTPPause();
    //   $(".bgVideo02").YTPPlay();
    //   $(".bgVideo03").YTPPause();
    // } else if (c == 2) {
    //   $(".bgVideo01").YTPPause();
    //   $(".bgVideo02").YTPPause();
    //   $(".bgVideo03").YTPPlay();
    // }
  });
  $(".mainSlider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 15000,
    fade: true,
  });

  $(".sliderBtn").on("click", () => {
    $(".sliderBtn").toggleClass("on");
    $(".sliderBtn i:first-child").YTPMute();
    $(".sliderBtn i:last-child").YTPUnmute();
  });

  $(".mealSliderM").slick({
    asNavFor: ".mealSliderS",
    slidesToShow: 1,
    fade: true,
  });
  $(".mealSliderS").slick({
    asNavFor: ".mealSliderM",
    slidesToShow: 5,
    swipeToSlide: true,
  });

  $(".textSlider").slick({
    slidesToShow: 1,
  });
  $(".rowSlider01").slick({
    slidesToShow: 3,
  });
  $(".rowSlider02").slick({
    slidesToShow: 3,
    rtl: true,
  });
  $(".rowSlider03").slick({
    slidesToShow: 3,
  });

  $(".textSlider .slick-prev").on("click", () => {
    $(".rowSlider01").slick("slickPrev");
    $(".rowSlider02").slick("slickPrev");
    $(".rowSlider03").slick("slickPrev");
  });
  $(".textSlider .slick-next").on("click", () => {
    $(".rowSlider01").slick("slickNext");
    $(".rowSlider02").slick("slickNext");
    $(".rowSlider03").slick("slickNext");
  });
  $(".textSlider .slick-next").on("click", () => {});
});

$(function () {
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
  $(".mainSlider").on("reInit afterChange", function (e, s, c) {
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

  $(".sliderBtn").on("click", function () {
    $(this).toggleClass("on");
    $(".sliderBtn i:first-child").YTPMute();
    $(".sliderBtn i:last-child").YTPUnmute();
  });

  $(".slider-m").slick({
    asNavFor: ".slider-s",
    slidesToShow: 1,
    fade: true,
  });
  $(".slider-s").slick({
    asNavFor: ".slider-m",
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
});

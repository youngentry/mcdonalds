$(function () {
  function video(videoClass, videoURL, containmentClass, startAtNum) {
    $(videoClass).YTPlayer({
      videoURL: videoURL,
      containment: containmentClass,
      autoPlay: true,
      mute: true,
      startAt: 0,
      opacity: 1,
      showControls: false,
      stopMovieOnBlur: false,
      playOnlyIfVisible: true,
      startAt: startAtNum,
    });
  }

  video(".bgVideo01", "https://youtu.be/MyVoER9Q-xk", ".slider01");
  video(".bgVideo02", "https://youtu.be/MNL6IMZEJ0g", ".slider02");
  video(".bgVideo03", "https://youtu.be/u2hLpzjQgvc", ".slider03", 14);

  $(".slider").slick({
    arrows: false,
    dots: true,
  });

  $(".slider").on("afterChange", function (e, s, c) {
    if (c == 0) {
      $(".bgVideo01").YTPPlay();
      $(".bgVideo02").YTPPause();
      $(".bgVideo03").YTPPause();
    } else if (c == 1) {
      $(".bgVideo01").YTPPause();
      $(".bgVideo02").YTPPlay();
      $(".bgVideo03").YTPPause();
    } else if (c == 2) {
      $(".bgVideo01").YTPPause();
      $(".bgVideo02").YTPPause();
      $(".bgVideo03").YTPPlay();
    }
  });
});

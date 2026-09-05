/* ---------------------------------------------------------
   1) MOBILE MENU
   Opens/closes the sidebar menu on small screens.
--------------------------------------------------------- */
var menuToggle = document.getElementById('menuToggle');
var navList = document.getElementById('primaryNav');

if (menuToggle && navList) {
  menuToggle.addEventListener('click', function () {
    navList.classList.toggle('open');
  });
}

/* ---------------------------------------------------------
   2) PROJECT VIDEOS
   Videos start muted + autoplay. When the user clicks a
   card, the video unmutes and plays with sound + controls.
   (Only runs on the Projects page — does nothing elsewhere.)
--------------------------------------------------------- */
var videoCards = document.querySelectorAll('.video-wrap');

videoCards.forEach(function (wrap) {
  var video = wrap.querySelector('video');
  if (!video) return;

  wrap.addEventListener('click', function () {
    video.muted = false;
    video.controls = true;
    video.play();
    wrap.classList.add('playing');
  });
});

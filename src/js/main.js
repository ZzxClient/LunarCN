(function () {

  var bv = new Bideo();
  bv.init({
    // Video element
    videoEl: document.querySelector('#background_video'),

    // Container element
    container: document.querySelector('body'),

    // Resize
    resize: true,

    // autoplay: false,

    isMobile: window.matchMedia('(max-width: 768px)').matches,

    playButton: document.querySelector('#play'),
    pauseButton: document.querySelector('#pause'),

    // Array of objects containing the src and type
    // of different video formats to add
    src: [
      {
        src: 'v.webm',
        type: 'video/webm;codecs="vp8, vorbis"'
      },

      
      {
        src: 'night.webm',
        type: 'video/webm;codecs="vp8, vorbis"'
      }
    ],

    // What to do once video loads (initial frame)
    onLoad: function () {
        // document.getElementById("background_video").currentTime = 10;
      // document.querySelector('#video_cover').style.display = 'none';
    }
  });
}());


setTimeout(function () {
    document.getElementById("background_video").currentTime = 10;
}, 100);
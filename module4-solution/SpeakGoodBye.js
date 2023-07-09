
(function (window) {
  let byeSpeaker = {};
  let speakWord = "Goodbye";

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  window.byeSpeaker = byeSpeaker;

})(window);
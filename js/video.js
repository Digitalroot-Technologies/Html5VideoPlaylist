/**
 * Video Player Object
 */
function VideoPlayer() {
  let self = this;
  self.view = null;
  self.VideoPlayerID = "videoPlayer";

  /**
   * Gets the Video Player DOM node
   * @returns {null|*}
   */
  self.GetElement = function () {
    if (self.view == null) {
      self.view = document.getElementById(self.VideoPlayerID);
    }
    return self.view;
  };

  /**
   * Play Video
   */
  self.Play = function () {
    player = self.GetElement();
    player.play();
  };

  /**
   * Pause Video
   */
  self.Pause = function () {
    player = self.GetElement();
    player.pause();
  };

  /**
   * Vol Up
   */
  self.VolUp = function () {
    player = self.GetElement();
    player.volume += 0.2;
  };

  /**
   * Vol Down
   */
  self.VolDown = function () {
    player = self.GetElement();
    player.volume -= 0.2;
  };

  /**
   * Vol Mute
   */
  self.VolMute = function () {
    player = self.GetElement();
    player.muted = player.muted !== true;
  };

  /**
   * Rewind
   */
  self.Rewind = function () {
    player = self.GetElement();
    if (player.currentTime - 5 < 0) {
      player.currentTime = 0;
    }
    else {
      player.currentTime -= 5;
    }
  };

  /**
   * Skip
   */
  self.Skip = function () {
    player = self.GetElement();
    if (player.currentTime + 5 > player.duration) {
      player.currentTime = player.duration;
    }
    else {
      player.currentTime += 5;
    }
  };

  /**
   * Set Source
   */
  self.SetSource = function (value) {
    player = self.GetElement();
    player.src = value;
  };

  /**
   * Set the video players default size
   */
  self.SetSize = function (w, h) {
    player = self.GetElement();
    player.style.width = w;
    player.style.height = h;
  }
}

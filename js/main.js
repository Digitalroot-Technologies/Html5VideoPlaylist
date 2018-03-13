let videoPlayer = new VideoPlayer();
let lastVideo = {};

/**
 * Fire on page load.
 */
function OnLoad() {
  console.log("loaded");
  let elm = document.getElementById("firstVideo");
  lnkChangeVideo(elm, true);
}

/**
 * Change the playing video
 * @param sender
 * @param pause
 */
function lnkChangeVideo(sender, pause) {
  console.log("Playing " + sender.getAttribute("movieurl"));
  videoPlayer.SetSource("vid/" + sender.getAttribute("movieurl"));
  if (!pause) {
    videoPlayer.Play();
  }
  ClearPlaying();
  SetPlaying(sender);
  ScrollToTop();
}

/**
 * btn640x480 click handler
 */
function btn640x480_OnClick(){
  videoPlayer.SetSize("640px", "480px");
  setContentBlockWidth("650px");
}

/**
 * btn720x480 click handler
 */
function btn720x480_OnClick(){
  videoPlayer.SetSize("720px", "480px");
  setContentBlockWidth("730px");
}

/**
 * btn852x480 click handler
 */
function btn852x480_OnClick(){
  videoPlayer.SetSize("852px", "480px");
  setContentBlockWidth("862px");
}

/**
 * btn800x600 click handler
 */
function btn800x600_OnClick(){
  videoPlayer.SetSize("800px", "600px");
  setContentBlockWidth("810px");
}



function setContentBlockWidth(value){
  let elm = document.getElementsByClassName("contentBlock")[0];
  elm.style.maxWidth = value;
}

/**
 * Video end handler
 */
function OnVideoEnd(){
  if(lastVideo.getAttribute("lastvideo")) {
    console.log("End of playlist.");
    return;
  }
  let nextPlaying = lastVideo.nextElementSibling;
  lnkChangeVideo(nextPlaying);
}

/**
 * Sets the playing video class to playing.
 */
function SetPlaying(elm) {
  elm.classList.add('playing');
  lastVideo = elm;
}

/**
 * Clears the playing class.
 */
function ClearPlaying() {
  let playing = document.getElementsByClassName("playing");
  if(playing.length > 0)
  {
    playing[0].classList.remove("playing");
  }
}

/**
 * Scrolls to the top of the page.
 * Source: https://stackoverflow.com/questions/1144805/scroll-to-the-top-of-the-page-using-javascript-jquery
 * Credit to: wake-up-neo 05/29/2015
 */
function ScrollToTop() {
  let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(ScrollToTop);
    window.scrollTo (0,currentScroll - (currentScroll/5));
  }
}

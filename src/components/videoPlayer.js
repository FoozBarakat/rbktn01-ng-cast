angular.module('video-player')

.component('videoPlayer', {
  controller: function(){
    this.getId = function(videoId){
        return "https://www.youtube.com/embed/" + videoId; 
    }
  },
  templateUrl: "src/templates/videoPlayer.html",
  bindings: {
    video: "<"
  }
});

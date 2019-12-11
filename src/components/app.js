angular.module('video-player')

.component('app', {
  controller: function(){
      console.log(window.exampleVideoData)
    this.selectVideo = (video)=>{
       this.currentVideo = video;
    };
    this.searchResults = ()=>{
     
    };
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
  
  },
  templateUrl: "src/templates/app.html"
});

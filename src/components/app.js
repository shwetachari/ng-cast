angular.module('video-player')
.controller(function($scope) {
  $scope.videoPlaying = window.exampleVideoData[0];
  // {id: {videoId: ''}, snippet: {title: '', description: '', thumbnails: {default: {url:''}}}}
})
.component('app', {
  templateUrl: 'src/templates/app.html'
});

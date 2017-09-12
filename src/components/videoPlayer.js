angular.module('video-player')
.controller('videoPlayerCtrl', function($scope) {
  $scope.$on('videoChanged', function(event, newVideo) {
    $scope.videoPlaying = newVideo;
  });
})
.component('videoPlayer', {
  bindings: {
    autoplay: '<'
  },
  templateUrl: 'src/templates/videoPlayer.html'
});

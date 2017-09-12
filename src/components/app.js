angular.module('video-player')
.controller('appCtrl', function($scope, youTube) {
  $scope.videos;
  this.autoplay = 0;
  youTube.searchYoutube('', $scope);
  $scope.videoPlaying;
  $scope.$watch('videoPlaying', function(newVideo, oldVideo) {
    youTube.getDescription(newVideo.id.videoId, $scope);
  });
  
  $scope.$on('makeAjaxRequest', function(event, searchString) {
    youTube.searchYoutube(searchString, $scope);
  });

  this.toggleAutoplay = function() {
    this.autoplay = this.autoplay === 0 ? 1 : 0;
  };

})

.component('app', {
  templateUrl: 'src/templates/app.html'
});

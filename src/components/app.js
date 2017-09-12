angular.module('video-player')
.controller('appCtrl', function($scope, youTube) {
  $scope.videos;
  youTube.searchYoutube('', $scope);
  
  $scope.videoPlaying;
  $scope.$watch('videoPlaying', function(newVideo, oldVideo) {
    $scope.$broadcast('videoChanged', newVideo);
  });
  
  $scope.$on('makeAjaxRequest', function(event, searchString) {
    youTube.searchYoutube(searchString, $scope);
  });
})

.component('app', {
  bindings: {
    video: '<'
  },
  templateUrl: 'src/templates/app.html'
});

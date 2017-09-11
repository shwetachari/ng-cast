angular.module('video-player')
.controller('appCtrl', function($scope) {
  $scope.videoPlaying;
  $scope.$watch('videoPlaying', function(newVideo, oldVideo) {
    $scope.$broadcast('videoChanged', newVideo);
  });
})
.component('app', {
  bindings: {
    video: '<'
  },
  templateUrl: 'src/templates/app.html'
});

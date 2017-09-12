angular.module('video-player')

.controller('videoListCtrl', function($scope) {
  $scope.videos = $scope.$parent.$parent.videos;

  $scope.handleClick = (index) => {
    $scope.$parent.$parent.videoPlaying = $scope.videos[index];

  };
})

.component('videoList', {
  templateUrl: 'src/templates/videoList.html'
});

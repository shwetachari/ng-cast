angular.module('video-player')

.controller('videoListCtrl', function($scope) {
  $scope.videos = window.exampleVideoData;

  $scope.handleClick = (index) => {
    console.log($scope.videos[index]);
    // $parent.videoPlaying = $scope.videos[index];
  }
})

.component('videoList', {
  templateUrl: 'src/templates/videoList.html'
});

angular.module('video-player')
.controller('appCtrl', function($scope, youTube) {
  $scope.videos;
  youTube.getVideos({
    'q': '',
    'maxResults': '5',
    'key': window.YOUTUBE_API_KEY,
    'type': 'video',
    'part': 'snippet',
    'videoEmbeddable': 'true'
  }, 'search', function(data) {
    $scope.videos = data;
  });
  
  $scope.videoPlaying;
  $scope.$watch('videoPlaying', function(newVideo, oldVideo) {
    $scope.$broadcast('videoChanged', newVideo);
  });
  
  $scope.$on('makeAjaxRequest', function(event, searchString) {
    //define our data query object
    var data = {
      'q': searchString,
      'maxResults': '5',
      'key': window.YOUTUBE_API_KEY,
      'type': 'video',
      'part': 'snippet',
      'videoEmbeddable': 'true'
    };
    //define our callback
    var renderList = function(data) {
      $scope.videos = data;
    };
    //pass those as parameters into our ajax request
    youTube.getVideos(data, 'search', renderList);
    //trigger downwards event to rerender videolist?
  });
})

.component('app', {
  bindings: {
    video: '<'
  },
  templateUrl: 'src/templates/app.html'
});

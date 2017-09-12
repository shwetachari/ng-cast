angular.module('video-player')
.service('youTube', function($http) {
  
  var lastRequest = Date.now() - 501;
  this.getVideos = function(dataQuery, urlEnding, callback) {
    var currentTime = Date.now();
    if (currentTime - lastRequest > 500) {
      lastRequest = currentTime;
      return $http({
        url: 'https://www.googleapis.com/youtube/v3/' + urlEnding,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',   
        },
        params: dataQuery
      }).then((response) => {
        callback(response.data.items);
      }).catch((error) => console.log('error', error)); 
    }
  };
  
  this.searchYoutube = function(searchString, $scope) {
    var data = {
      'q': searchString,
      'maxResults': '5',
      'key': window.YOUTUBE_API_KEY,
      'type': 'video',
      'part': 'snippet',
      'videoEmbeddable': 'true'
    };
    var renderList = function(data) {
      $scope.videos = data;
    };
    this.getVideos(data, 'search', renderList);
  };

  this.getDescription = function(id, $scope) {
    var data = {
      'id': id,
      'maxResults': '1',
      'key': window.YOUTUBE_API_KEY,
      'part': 'snippet,contentDetails,statistics',
    };
    var renderList = function(data) {
      $scope.videoPlaying = data[0];
      $scope.$broadcast('videoChanged', $scope.videoPlaying);
    };
    this.getVideos(data, 'videos', renderList);
  };

});















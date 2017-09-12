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
});
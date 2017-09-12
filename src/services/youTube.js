angular.module('video-player')
.service('youTube', function($http) {
  
  this.getVideos = function(dataQuery, urlEnding, callback) {
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
  };
});
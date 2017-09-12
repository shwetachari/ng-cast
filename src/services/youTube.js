angular.module('video-player')
.service('youTube', function($http) {
  
  this.getVideos = function(dataQuery, urlEnding, callback) {
    return $http({
      url: 'https://www.googleapis.com/youtube/v3/' + urlEnding,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',   
      },
      data: dataQuery
    }).then((response) => {
      console.log('initial response', response.data);
      // if (response.ok) {        
      //   return response.data;
      // } else {
      //   console.log('OH NO!!!!! ERROR!!!');
      // }
    }).catch((error) => console.log('error', error));
  };
});
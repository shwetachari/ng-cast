angular.module('video-player')
.controller('searchCtrl', function($scope) {
  $scope.searchValue = '';
  console.log($scope.searchValue);
  $scope.triggerSearch = function() {
    $scope.$emit('makeAjaxRequest', $scope.searchValue);
  };
})
.component('search', {
  templateUrl: 'src/templates/search.html'
});

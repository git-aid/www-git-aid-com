(function () {

  /**
   * Your repos controller
   *
   * @param $scope
   * @constructor
   */
  function YourReposController($scope, $http, auth, session){

    $scope.repos = [];

    if (auth.isLoggedIn()) {
      $http
        .get('https://api.github.com/user/repos?type=owner&access_token=' + session.getGitHubAccessToken())
        .then(
          function(response){
            console.dir(response.data);
            $scope.repos = response.data;
          }
        );
    } else {
      console.log('Logged out');
    }

  }

  // Inject dependencies
  YourReposController.$inject = ['$scope', '$http', 'auth', 'session'];

  // Assign
  angular.module('app')
    .controller('YourReposController', YourReposController);

})();

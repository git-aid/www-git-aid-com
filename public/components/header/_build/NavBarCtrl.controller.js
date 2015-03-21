(function(){

  /**
   * Controller for navigation bar
   *
   * @param $scope
   * @param $translate
   * @constructor
   */
  function NavBarCtrl($scope, auth, session){

    $scope.doLogIn = function(){

      auth
        .logIn()
        .then(
          function(authData){
            console.log('Logged in');
            console.dir(authData);
          }
        );

    };

    $scope.doLogOut = function(){
      auth.logOut();
    };

    console.dir(session);
    console.log('isLoggedIn: ' + auth.isLoggedIn());

  }

  // Inject dependencies
  NavBarCtrl.$inject = ['$scope', 'auth', 'session'];

  // Export
  angular
    .module('app')
    .controller('NavBarCtrl', NavBarCtrl);

})();

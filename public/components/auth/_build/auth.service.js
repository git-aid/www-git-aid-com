(function (angular) {

  function AuthService($q, $firebaseAuth, session){

    var ref = new Firebase('https://git-aid.firebaseio.com/');
    var authObj = $firebaseAuth(ref);

    this.isLoggedIn = function isLoggedIn(){
      return session.getAuthData() !== null;
    };

    this.logIn = function(){
      return authObj
        .$authWithOAuthPopup('github', {
          scope: 'user'
        })
        .then(
          function(authData){
            session.setAuthData(authData);
            return authData;
          },
          function(error){
            $q.reject(error);
          }
        );
    };

    this.logOut = function(){
      authObj.$unauth();
      session.destroy();
    };

  }

  // Inject dependencies
  AuthService.$inject = ['$q', '$firebaseAuth', 'session'];

  // Export
  angular.module('app')
    .service('auth', AuthService);

})(angular);

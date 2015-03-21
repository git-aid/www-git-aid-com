(function (angular) {

  angular.module('app')
    .factory('httpAuthenticationInterceptor', httpAuthenticationInterceptorFactory);

  /**
   * Configure authomator
   */
  function httpAuthenticationInterceptorFactory($q, $log, auth) {

    return {
      'request': function (config) {
        console.dir(config);
        return config;
      }
    };

  }

  // Inject dependencies;
  httpAuthenticationInterceptorFactory.$inject = ['$q', '$log', 'auth'];

})(angular);

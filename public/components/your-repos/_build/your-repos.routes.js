(function () {

  angular.module('app')
    .config(['$stateProvider', function ($stateProvider) {

      $stateProvider
        .state('your-repos', {
          url: '/your-repos',
          views: {
            'content@': {
              templateUrl: '/components/your-repos/your-repos.html',
              controller: 'YourReposController',
              controllerAs: 'YourReposController'
            }
          }
        });

    }]);

})();

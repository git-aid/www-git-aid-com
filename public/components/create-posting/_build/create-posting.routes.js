(function () {

  angular.module('app')
    .config(['$stateProvider', function ($stateProvider) {

      $stateProvider
        .state('create-posting', {
          url: '/create-posting',
          views: {
            'content@': {
              templateUrl: '/components/create-posting/create-posting.html',
              controller: 'CreatePostingCtrl',
              controllerAs: 'CreatePostingCtrl'
            }
          }
        });

    }]);

})();

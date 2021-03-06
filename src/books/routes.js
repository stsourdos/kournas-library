(function() {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/books/home.template.html',
    controller: 'BooksController',
    controllerAs: 'booksCtrl',
    resolve: {
      books: ['DataService', function (DataService) {
        return DataService.getBookData();
      }]
    }
  })
  ;

}

})();

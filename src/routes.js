(function() {
'use strict';

angular.module('BooksApp')
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
    templateUrl: 'src/books/templates/books.template.html',
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

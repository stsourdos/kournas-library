(function () {
"use strict";

angular.module('BooksApp')
.controller('BooksController', BooksController);

BooksController.$inject = ['books'];
function BooksController(books) {
  var $ctrl = this;
  books = eval(books);

  $ctrl.updatedAt = new Date(books.feed.updated.$t).toString();

  $ctrl.books = [];
  // construct a more simple json array of objects for UI representation
  books.feed.entry.forEach(function(item){
    var book = {};
    book.title = item.gsx$title.$t;
    book.number = item.gsx$number.$t;
    book.author = item.gsx$authorname.$t + " " + item.gsx$authorsurname.$t;
    book.authorSurname = item.gsx$authorsurname.$t;
    book.publisher = item.gsx$publisher.$t;
    book.publishplace = item.gsx$publishplace.$t;
    book.publishAge = item.gsx$publishage.$t;
    book.taxonomyi = item.gsx$taxonomyi.$t;
    book.taxonomyii = item.gsx$taxonomyii.$t;
    book.subject = item.gsx$subject.$t;
    book.volume = item.gsx$volume.$t;
    book.isbn = item.gsx$isbn.$t;
    book.pages = item.gsx$pages.$t;

    $ctrl.books.push(book);
  });

  $ctrl.updateSelect = function () {
  };
}

// JSONP response callback
function extract (data) {
  return data;
}

})();

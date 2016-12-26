(function () {
'use strict';

angular.module('data')
.service('DataService', DataService);

DataService.$inject = ['$q', '$http', 'ApiBasePath'];
function DataService($q, $http, ApiBasePath) {
  var service = this;

  service.getBookData = function () {
    var deferred = $q.defer();

    return $http({
      method: "GET",
      url: (ApiBasePath)
    }).then(function (result) {
      deferred.resolve(result.data);
      return deferred.promise;
    });
  };
}

})();

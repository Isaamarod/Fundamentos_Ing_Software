(function () {
    "use strict";
     
    angular.module("mdApp")
        .factory('MdApi', MdApi);
         
    MdApi.$inject = ["$http"];
         
    function MdApi($http) {
        var fn = {},
            baseUrl = "http://localhost:3000/";
             
        fn.query = query;
         
        function query(endPoint) {
            return $http.get(baseUrl + endPoint);
        }
         
        return fn;
    }
} ());
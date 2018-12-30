(function () {
    "use strict";
     
    angular.module("mdApp")
        .controller("mdController", mdController);
         
    mdController.$inject = ["MdApi"];
         
    function mdController(MdApi) {
        var vm = this;
         
        vm.users = [];
         
        // Obtenemos los datos
        MdApi.query("users")
            .then(function(response) {
                vm.users = response.data;
            });
    }
} ());
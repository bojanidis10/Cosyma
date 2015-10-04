(function () {
    'use strict';
    var MainController = function ($translate, $translatePartialLoader, $scope, computerFactory) {
        $translatePartialLoader.addPart('applications');
        $translate.refresh();
        // Computers inside the side menu
        $scope.computers = computerFactory.getComputers();
    };

    angular.module('cosymaApp').controller('MainController', MainController);
}());


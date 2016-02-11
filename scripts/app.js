/**
 * Created by user3 on 2/10/2016.
 */

var myApp=angular.module("myAngularApplication",["ngRoute"]).config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "home.html",
            controller: "homeController"
        })
        .when("/about", {
            templateUrl: "about.html",
            controller: "aboutController"
        })
        .when("/contact", {
            templateUrl: "contact.html",
            controller: "contactController"
        }).
    otherwise({
        redirect: '/home'
    });
}]);

(function () {

    var homeController = function ($scope) {

    }

    angular.module('myAngularApplication').controller('homeController', ["$scope", homeController]);

}());

(function () {

    var contactController = function ($scope) {

    }

    angular.module('myAngularApplication').controller('contactController', ["$scope", contactController]);

}());

(function () {

    var aboutController = function ($scope) {

    }

    angular.module('myAngularApplication').controller('aboutController', ["$scope", aboutController]);

}());
/**
 * main.js
 * 
 * myApp is referenced in index.html in the <html> tag. 
 * This file is bootstrapped when index.html is loaded. 
 * 
 */
var app = angular.module('myApp', []);
app.controller('myController', function($scope) {
    $scope.lastname = 'Millar';
});
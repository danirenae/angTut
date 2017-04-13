"use strict";

var MainCtrl = function($scope) {

  var person = {
    firstName: "Scott",
    lastName: "Allen",
    imageSrc: "pic"
  }
  $scope.message = "Hello!";
  $scope.person = person;
};
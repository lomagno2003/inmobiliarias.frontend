
jQuery(document).ready(function($) {
      $(".clickableRow").click(function() {
            window.document.location = $(this).attr("href");
      });
});


var myApp = angular.module('myApp', ['ngResource','ngRoute','restangular']);
"use strict";

$(document).ready(function() {
  $('button#load-cars').on('click', function(event) {
    var page = 2;
    fetchJSON();
  });
});

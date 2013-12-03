// Adapted from https://github.com/etcet/HNES/blob/master/js/hn.js

$(document).ready(function() {
  
  $('body > center > table > tbody > tr:first-child').attr('id', 'header');

  $('#header td').removeAttr('bgcolor');
  $('#header > td > table > tbody > tr > td:first-child').removeAttr('style').attr('id', 'img-wrapper');
  $('#header > td > table > tbody > tr > td:nth-child(2)').removeAttr('style').attr('id', 'title');
});
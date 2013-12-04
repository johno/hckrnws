// Adapted from https://github.com/etcet/HNES/blob/master/js/hn.js

$(document).ready(function() {
  
  $('body > center > table > tbody > tr:first-child').attr('id', 'header');

  $('#header td').removeAttr('bgcolor');
  $('#header > td > table > tbody > tr > td:first-child').removeAttr('style').attr('id', 'img-wrapper');
  $('#header > td > table > tbody > tr > td:nth-child(2)').removeAttr('style').attr('id', 'title');

  $('body > center > table > tbody > tr:nth-child(3)').attr('id', 'articles');

  $('#articles > td > table tr:nth-child(3n-2)').addClass('article-title');
  $('#articles > td > table tr:nth-child(3n-1)').addClass('article-details');
  $('#articles > td > table tr:nth-child(3n)').remove();

});
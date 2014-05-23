// Adapted from https://github.com/etcet/HNES/blob/master/js/hn.js

$(document).ready(function() {

  $().makeHeaderPretty();

  // Use url instead of this junk.
  if($().isCommentsPage()) {
    $().makeCommentsPagePretty();
  } else if($().isAskPage()) {
    // ...
  } else {
    $().makeArticlesPretty();
  }

  $().makeFooterPretty();
});

$.fn.makeHeaderPretty = function() {
  $('body > center > table > tbody > tr:first-child').attr('id', 'header');

  $('#header td').removeAttr('bgcolor');
  $('#header > td > table > tbody > tr > td:first-child').removeAttr('style').attr('id', 'img-wrapper');
  $('#header > td > table > tbody > tr > td:nth-child(2)').removeAttr('style').attr('id', 'title');
}

$.fn.makeFooterPretty = function() {
  $('body > center > table > tbody > tr:last-child').attr('id', 'footer');
}

$.fn.makeArticlesPretty = function() {
  $('body > center > table > tbody > tr:nth-child(3)').attr('id', 'articles');
  $('body > center > table > tbody > tr:nth-child(2)').remove();
  $().nukeArticlesBodyAndReplaceWithUl();
}

$.fn.nukeArticlesBodyAndReplaceWithUl = function() {
  var articleTrs = $('#articles > td > table tr').toArray();
  $('#articles').html("<ul id='articles-list'></ul>");

  for(var i = 0; i < articleTrs.length; i += 3) {
    $('#articles-list').append($().createLiFromTitleAndDetails(articleTrs[i], articleTrs[i+1]));
  }
  $('#articles-list').append(articleTrs[articleTrs.length-1]);
  $('#articles-list > tr').attr('id', 'more').wrap('<li class="more-wrapper"></li>');
}

$.fn.createLiFromTitleAndDetails = function(currTitle, currDetails) {
  if(!$(currTitle).find('.title').length) return;

  return "<li>" +
            $().getLinkFromTitle(currTitle) + '<br>' +
            $().getPostDetails(currDetails)
         "</li>";
}

$.fn.getLinkFromTitle = function(currTitle) {
  return "<a class='title-link' href='" +
         $(currTitle).find('.title a').attr('href') + "'>" +
         $(currTitle).find('.title a').text() + "</a>"
}

$.fn.getPostDetails = function(currDetails) {
  return "<span class='small'>" + $(currDetails).find('.subtext').html() + "</span>";
}

$.fn.makeCommentsPagePretty = function() {
  $('body > center > table > tbody > tr:nth-child(2)').remove();

  $('body > center > table > tbody > tr:nth-child(2)').attr('id', 'comment');
  $('#comment > td > table:eq(0) > tbody > tr:eq(0)').addClass('article-title');
  $('#comment > td > table:eq(0) > tbody > tr:nth-child(2)').addClass('article-details');
  $('#comment > td > table:eq(0) > tbody > tr:nth-child(3)').remove();
  $('#comment > td > table:eq(0) > tbody > tr:nth-child(3)').attr('id', 'add-comment-wrapper');
  $('#comment > td > table:eq(1)').attr('id', 'comments-box-wrapper');
  $('#comment > td > table:eq(1) > tbody > tr').addClass('comments-box');
}

$.fn.isCommentsPage = function() {
  return $('body > center > table > tbody > tr:nth-child(3) > td > table tr:nth-child(4) td form').length > 0;
}

$.fn.isAskPage = function() {
  return $('body > center > table > tbody > tr:nth-child(3) > td > table tr:nth-child(6) td form').length > 0;
}


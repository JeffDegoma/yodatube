$(document).ready(function() {
  var youTubeAPIUrl = 'https://www.googleapis.com/youtube/v3/search';

  function getDataFromApi(userQuery, callback){
    var API_KEY = 'AIzaSyADE-gKrXFLBoNDnW9F4-mqNLu-sdpaCfo';
    var apiEnxdPoint = youTubeAPIUrl
    var request = {
      part: 'snippet',
      key: API_KEY,
      q: userQuery
    }
    $.getJSON(apiEnxdPoint, request, callback)
  }

  function renderImageThumbnail(data) {
    console.log(data);

    var images = data.items.map(function(item) {
      var videoId = item.id.videoId;
      var title = item.snippet.title;
      return '<figure class= "caption">\
                <a href="https://www.youtube.com/watch?v='+ videoId +'"> \
                <img src="' + item.snippet.thumbnails.medium.url + '" class="thumbnail" /></a>&nbsp\
                <figcaption>' + title + '</figcaption>\
                </figure>';
    });



    $('.js-results').html(images);
  }

  function userSearchSubmit (){
    $(".js-query-submit").on('click',function(event){
      var query = $('.js-query').val();
      // make API call and run render function
      getDataFromApi(query, renderImageThumbnail);
    })
  }
  userSearchSubmit();

});

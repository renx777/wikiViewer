$(document).ready(function () {





  function getWiki() {
    // on press of enter,get the value typed in the input 
    $('input').toggleClass('x')
    $('#result').empty();
    var fd = $('#d').val()

    //  call wiki api with input serach 
    $.getJSON('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=20&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + fd + '&callback=?', function (data) {
      console.log(data.query.pages)
      var obj = data.query.pages;

      //  going through response data,to make it presentable for our application
      for (var key in obj) {
        console.log(key)

        $('#result').append('<div class="container">' +
          '<div class="row"><div class="col-md-12">' +
          '<a href=https://en.wikipedia.org/?curid=' + key + '>' + obj[key].title + ':</a>' +
          '</div></div>' +
          '<div class="row"><div class="col-md-12">' +
          '<p>' + obj[key].extract + '</p></div></div></div>');
        $('a').attr('target', '_blank')
        $('#d').val("")
      }

     

    })
  }

  $('#d').keypress(function (e) {
    if (e.keyCode == 13) {

      getWiki()

    }
  });



  $('.fa-search').on('click', function () {

    getWiki()




  })
// get random article from wikpedia
  $('.fa-random').on('click', function () {
    var win = window.open('https://en.wikipedia.org/wiki/Special:Random', '_blank')
    win.focus();
  })

})
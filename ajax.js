$(function () {

  $('#root').click(function() {

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      data: {},
      dataType: 'html'
    }).done(function(data){
      console.log('data: '+ data);
    });

  });

});

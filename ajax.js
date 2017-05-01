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

  $('#ping-pong').click(function() {

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      data: {},
      dataType: 'html'
    }).fail(function(data){
      var fail = 'Unable to access to pong';
      console.log(fail);
      $('#step3456').append('<p>'+fail+'</p>');

    });

  });




});

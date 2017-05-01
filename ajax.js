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
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      data: {},
      dataType: 'html'
    }).done(function(data){
      console.log('data: ping');
      console.log('data: pong');
      console.log('Response Data'+ data);
      $('#step3456').append('<p>'+data+'</p>');

    });

  });


});

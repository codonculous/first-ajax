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
      $('#step3456').append('<p>' + data + '</p>');
    }).fail(function(){
      var fail = 'Unable to access to pong';
      console.log(fail);
      $('#step3456').append('<p>'+fail+'</p>');
    }).always(function(){
      console.log('Request finished');
    });

  });




});

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
    }).done(function(data){
      $('#step3456').append('<p>' + data + '</p>');
    }).fail(function(jqXHR, textStatus, errorThrown){
      var jq = jqXHR.responseText;
      $('body').append(jq);
      var fail = 'Unable to access to pong';
      console.log('jqXHR ' + jqXHR);
      console.log('textStatus '+textStatus);
      console.log('errorThrown ' + errorThrown);
      console.log(fail);
      $('#step3456').append('<p>'+fail+'</p>');
    }).always(function(){
      console.log('Request finished');
    });

  });

  $('#count').click(function() {
    for (var i=1;i<10;i++) {
    $.ajax({


        url: 'http://first-ajax-api.herokuapp.com/count',
        method: 'GET',
        data: {amount: i },
        dataType: 'html',
        context:this,
        success: this.mySuccess,
        error:this.myError,
        cache:false,
        beforeSend:function(jqXHR,settings){
          jqXHR.url = settings.url;
        },
        error:function(jqXHR,exception){
          console.log(jqXHR.url);
          var fail = ' Unable to access';
          // debugger
          // console.log(fail);
          $('#step7').append('<p>'+jqXHR.url+""+fail+'</p>');

        }

      }).done(function(data){
        $('#step7').append('<p>' + data + '</p>');
      }).fail(function(error,message,t){
          // console.log(i,error);
        // console.log(error);

      }).always(function(b){
        // debugger
        // console.log(b+'Request finished');
      });

    }
  });

  $('#time').click(function() {

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: {timezone : 'America/Mexico_City'},
      dataType: 'html'
    }).done(function(data){
      $('#step8').append('<p>' + data + '</p>');
    }).fail(function(){
      var fail = 'Unable to access';
      console.log(fail);
      $('#step8').append('<p>'+fail+'</p>');
    }).always(function(){
      console.log('Request finished');
    });

  });
console.log('fasdf');
  $('#timezone-form').on('click','#submit-b',function(e) {
    e.preventDefault();
    var time = $('#timezone-form').find('[name="timezone"]');
    console.log(this);
    // debugger
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: {timezone : time.val()},
      dataType: 'html'
    }).done(function(data){
      $('#step8').append('<p>' + data + '</p>');
    }).fail(function(jsXHR,textStatus,errorThrown){
      var fail = 'Unable to access';
      console.log(fail);
      $('#step8').append('<p>'+errorThrown+'</p>');
    }).always(function(){
      console.log('Request finished');
    });

  });

  $('#car').click(function() {

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      // data: {timezone : 'America/Mexico_City'},
      dataType: 'html'
    }).done(function(data){
      $('#step9').append('<ul></ul>').attr('id','list');
      $('#list').append(data);
    }).fail(function(){
      var fail = 'Unable to access';
      console.log(fail);
      $('#step9').append('<p>'+fail+'</p>');
    }).always(function(){
      console.log('Request finished');
    });

  });


});

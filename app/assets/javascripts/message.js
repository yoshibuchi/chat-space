$(function(){
    function buildHTML(message){
      image = (message.image) ? `<img class= "message__text__image" src=${message.image} >` : "";
      var html = `<div class="message">
      <div class="message__upper-info">
        <div class="message__upper-info__talker">
          ${message.user_name}
        </div>
        <div class="message__upper-info__date">
          ${message.date}
        </div>
      </div>
      <div class="message__text">
        ${message.content}
        ${image}
        
      </div>
    </div>`
      return html;
    }
    $("#new_message").on('submit', function(e){
      e.preventDefault();
      var formData = new FormData(this);
      var text = $(".form__message").val()
      var url = $(this).attr('action');
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      .done(function(data){
        var html = buildHTML(data);
        $('.form__submit-button').prop('disabled', false);
        $('.messages').append(html);
        $('.textbox').val('');
        $('#new_message')[0].reset();
      })
      .fail(function(){
        alert('error');
      }) 
      return false;
    })
  });
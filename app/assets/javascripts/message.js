$(document).on('turbolinks:load', function() {
  function buildHTML(message){
    image = (message.image) ? `<img class= "message__text__image" src=${message.image} >` : "";
    var html = `<div class="message" data-message-id=${message.id}>
    <div class="message__upper-info">
      <div class="message__upper-info__talker">
        ${message.user_name}
      </div>
      <div class="message__upper-info__date">
        ${message.date}
      </div>
    </div>
    <div class="message__text">
    <div class="message__text__content">
      <p>
      ${message.content}
      </p>
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
    .done(function(message){
      var html = buildHTML(message);
      
      $('.form__submit-button').prop('disabled', false);
      $('.messages').append(html);
      $('#new_message')[0].reset();
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
    })
    .fail(function(){
      alert('error');
    }) 
      return false;
  })

  
    var reloadMessages = function() {
      
    
      if (window.location.href.match(/\/groups\/\d+\/messages/)){
        var last_message_id = $('.message:last').data('message-id') || 0;
        var group = $('.chat-main__main-header').data('group-id')
        var url = `/groups/${group}/api/messages`
        $.ajax({
          url: url,
          type: 'GET',
          data: {id: last_message_id},
          dataType: 'json'
        })
        .done(function(messages) {
          var insertHTML = '';
          messages.forEach(function(message) {
            insertHTML += buildHTML(message);
              $('.messages').append(insertHTML);
              $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');      
          })
           
        })
        .fail(function(){
          alert('自動更新に失敗しました。');
        });
      }
    }
    setInterval(reloadMessages, 5000);
 });
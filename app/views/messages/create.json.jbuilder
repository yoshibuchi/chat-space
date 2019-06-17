json.content  @message.content
json.user_id  @message.user.id
json.user_name  @message.user.name
json.id @message.id
json.date @message.created_at.strftime("%Y/%m/%d %H:%M")
json.group_id @message.group_id
json.image @message.image.url
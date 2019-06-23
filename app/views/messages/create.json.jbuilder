json.content  @message.content
json.user_name  @message.user.name
json.id @message.id
json.date @message.created_at.strftime("%Y/%m/%d %H:%M")
json.image @message.image.url
json.group_id @message.group.id
json.user_id @message.user.id


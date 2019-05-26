## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
has_many :users, through: :group_users
has_many :group_users
has_many :messages

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|image|string|
|text|text|
|group_id|reference|null:false,foreign_key: true|
|user_id|reference|null: false,foreign_key: true|

### Association

belongs_to :group
belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique :true, index|
|email|string|null: false|

### Association
has_many :groups, through: :group_users
has_many :group_users
has_many :messages

## group_userテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|reference|null: false,foreign_key: true|
|group_id|reference|null: false, foreign_key: true|

### Association
belongs_to :group
belongs_to :user








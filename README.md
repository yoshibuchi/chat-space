## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false,foreign: true|

### Association
has_many :users, through: :group_usersテーブル
has_many :group_usersテーブル
has_many :messageテーブル

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|image|string|
|text|text|
|group_id|reference|null:false,foreign_key: true|
|user_id|reference|null: false,foreign_key: true|

### Association

has_many :group
has_many :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|

### Association
has_many :groups, through: :group_usersテーブル
has_many :group_usersテーブル
has_many :messages

## group_userテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|reference|null: false,foreign_key: true|
|group_id|reference|null: false, foreign_key: true|

### Association
has_many :group
has_many :user








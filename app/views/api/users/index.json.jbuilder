json.array! @users do |user|
  json.first_name user.first_name
  json.last_name user.last_name
  json.age user.age
end

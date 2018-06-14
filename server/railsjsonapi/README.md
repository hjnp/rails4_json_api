============================== 
DOCS

rake db:create && rake db:seed

rails s


============================== 
INVESTIGATIONS

1. i need comment this line on file Applications_controller.rb 
    > protect_from_forgery with: :exception
  - for sign_in context 
    ´http://localhost:3000/auth/sign_in´
  - source
    https://stackoverflow.com/questions/20875591/actioncontrollerinvalidauthenticitytoken-in-registrationscontrollercreate




============================== 
TESTS

curl -v -X "POST" "http://localhost:3000/auth/sign_in" \
     -H "Content-Type: application/json; charset=utf-8" \
     -d $'{
  "email": "user@example.com",
  "password": "monkey67"
}'
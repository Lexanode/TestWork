docker compose up

excel generate service
http://localhost:3000/swagger

POST http://localhost:3001/report/
create task to generate excels

GET http://localhost:3001/report/:id
get data from db about report


client service
http://localhost:3001/swagger

GET http://localhost:3000/api/v1/data?page=1&count=10
get data from db about odrders

GET http://localhost:3000/api/v1/mock
fill db random orders
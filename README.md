# Test work🔨

## Install
Download project
```
git clone https://github.com/Lexanode/TestWork.git
```
Using DOCKER:
```
docker compose up
```

## Nest js
excel generate service
http://localhost:3000/swagger

GET http://localhost:3001/report/:id
get data from db about report

POST http://localhost:3001/report/ <br>
example Payload
```json
{
    "titleService": "TaxiMaksim",
    "columnHeaders": [
      "id",
      "status",
      "price",
      "pickupLocation",
      "dropoffLocation",
      "create_date",
    ],
    "dataUrl": "http://client:3001/api/v1/data?page=1&count=10"
}

```
create task to generate excels


## Express TS
client service
http://localhost:3001/swagger

GET http://localhost:3000/api/v1/data?page=1&count=10
get data from db about orders

POST http://localhost:3000/api/v1/mock
fill db random orders
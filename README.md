# COMMAND LIST

```
I. Pre Installation.
  - make sure to have nodejs and postgres  installed on your system.
  - feel free to change username and password according to your postgres,  in order to change it you can open config/config.json and set yours on development section.
  - i set this server to run on port: 3001, feel free to change it as you see fit, in order to change the port, you can open server.js and change the port.

II. Installation.

  1. npm install // install npm package
  2. npx sequelize db:create // creating database
  3. npx sequelize db:migrate // creating tables on database
  4. npx sequelize db:seed:all // insert seeder into table
  5. npm run start

III. Postman Documentation.
  I have a postman documentation published, but if you still need an API documentation you can check the list on API DOCUMENTATION section below.

  postman link: https://documenter.getpostman.com/view/13588788/Tz5m6ygs

```

# API DOCUMENTATION

>get all product
### GET /:SELLER_ID

_Request Params_
```
seller id
```
_Response(200)_
```
http://localhost:3001/1
{
    "products": [
        {
            "id": 1,
            "name": "beras",
            "price": 10000,
            "unit": "kilogram",
            "SellerId": 1,
            "createdAt": "2021-03-07T03:12:00.473Z",
            "updatedAt": "2021-03-07T03:12:00.473Z"
        }
    ]
}

```

>find product
### GET /:KEY_WORD

_Request Params_
```
KEY_WORD
```
_Response(200)_
```
http://localhost:3001/ras
{
    {
    "products": [
        {
            "id": 1,
            "name": "beras",
            "price": 10000,
            "unit": "kilogram",
            "SellerId": 1,
            "createdAt": "2021-03-07T03:12:00.473Z",
            "updatedAt": "2021-03-07T03:12:00.473Z"
        },
        {
            "id": 4,
            "name": "beras padang",
            "price": 10000,
            "unit": "kilogram",
            "SellerId": 1,
            "createdAt": "2021-03-07T04:23:27.867Z",
            "updatedAt": "2021-03-07T04:23:27.867Z"
        },
        {
            "id": 8,
            "name": "Beras jawa",
            "price": 100000,
            "unit": "kilogram",
            "SellerId": 1,
            "createdAt": "2021-03-07T10:38:15.708Z",
            "updatedAt": "2021-03-07T10:38:15.708Z"
        }
    ]
}
}

```

>create product
### POST /

_Request Body_
```
{
    "SELLER_ID": 1,
    "NAMA": "kacang tanah", 
    "SATUAN": "kilogram", 
    "HARGA_SATUAN": 10000
}
```
_Response(201)_
```
{
    "PRODUCT_ID": 10
}
```
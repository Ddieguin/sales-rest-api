```

```

## Instalação

1. **Para instalar as dependências use:**

```sh
$ npm install
```

## Executar Testes

1. **Para rodar os testes use:**

```sh
$ npm run test
```

## Rodar Aplicação

1. **Para rodar a aplicação use:**

```sh
$ npm run start
```

# Sales REST API

## Get list of Products

### Request

`GET http://localhost:3003/api/products`

### Response

    < HTTP/1.1 200 OK
    < X-Powered-By: Express
    < Access-Control-Allow-Origin: *
    < Content-Type: application/json; charset=utf-8
    < Content-Length: 625
    < ETag: W/"271-oRfB9VB2DePdHRZ12YvDfOS32GY"
    < Date: Mon, 24 Jan 2022 23:31:17 GMT
    < Connection: keep-alive
    < Keep-Alive: timeout=5

    {
    "data": [
    	{
    		"id_product": "8509904a-bf72-43b2-bd60-85f415bad287",
    		"name_product": "mouse logitech g203",
    		"price_product": "250.00",
    		"quantity": 3,
    		"created_at": "2022-01-24T21:42:47.970Z",
    		"updated_at": "2022-01-24T21:42:47.970Z"
    	},
    	{
    		"id_product": "be79bfe6-315a-4831-a958-a3308083520a",
    		"name_product": "Iphone 13",
    		"price_product": "8000.50",
    		"quantity": 8,
    		"created_at": "2022-01-24T21:38:30.080Z",
    		"updated_at": "2022-01-24T22:53:01.710Z"
    	},
    	{
    		"id_product": "49f278b3-a009-48f4-a498-6b7710a5be19",
    		"name_product": "Hyperx Alloy fps",
    		"price_product": "970.00",
    		"quantity": 3,
    		"created_at": "2022-01-24T23:31:03.716Z",
    		"updated_at": "2022-01-24T23:31:03.716Z"
    	}
    ]
    }

## Create a new Products

### Request

`POST http://localhost:3003/api/products`

    body  <Request>

    {
     "name_product": "Hyperx Alloy fps",
     "price_product": 970.00,
     "quantity": 3
    }

### Response

    < HTTP/1.1 201 Created
    < X-Powered-By: Express
    < Access-Control-Allow-Origin: *
    < Content-Type: application/json; charset=utf-8
    < Content-Length: 223
    < ETag: W/"df-0wRO1wgqiRJHAIdaw9koeWprLS8"
    < Date: Mon, 24 Jan 2022 23:31:06 GMT
    < Connection: keep-alive
    < Keep-Alive: timeout=5

    {
    "sucess": true,
    "data": {
    	"id_product": "49f278b3-a009-48f4-a498-6b7710a5be19",
    	"name_product": "Hyperx Alloy fps",
    	"price_product": 780.5,
    	"quantity": 10,
    	"created_at": "2022-01-24T23:31:03.716Z",
    	"updated_at": "2022-01-24T23:34:00.693Z"
        }
    }

## Delete a Product

### Request

`DELETE http://localhost:3003/api/products/a0b99d14-fbf9-44a8-bf6b-e4f8772f66d0`

### Response

    < HTTP/1.1 200 OK
    < X-Powered-By: Express
    < Access-Control-Allow-Origin: *
    < Content-Type: application/json; charset=utf-8
    < Content-Length: 15
    < ETag: W/"f-QA9d7/mObwj2tWS69KgCPjeQMSI"
    < Date: Mon, 24 Jan 2022 21:26:36 GMT
    < Connection: keep-alive
    < Keep-Alive: timeout=5


    {
    "sucess": true
    }

## Update a Product

### Request

`PATCH http://localhost:3003/api/products/49f278b3-a009-48f4-a498-6b7710a5be19`

    body <Request>

    {
      "price_product": 780.50,
      "quantity": 10
    }

### Response

    {
    "sucess": true,
    "data": {
    	"id_product": "49f278b3-a009-48f4-a498-6b7710a5be19",
    	"name_product": "Hyperx Alloy fps",
    	"price_product": 780.5,
    	"quantity": 10,
    	"created_at": "2022-01-24T23:31:03.716Z",
    	"updated_at": "2022-01-24T23:34:00.693Z"
    }

    }

## Get a Product

### Request

`GET http://localhost:3003/api/products/be79bfe6-315a-4831-a958-a3308083520a `

### Response

    {
    "sucess": true,
    "data": {
    	"id_product": "be79bfe6-315a-4831-a958-a3308083520a",
    	"name_product": "Iphone 13",
    	"price_product": "8000.50",
    	"quantity": 8,
    	"created_at": "2022-01-24T21:38:30.080Z",
    	"updated_at": "2022-01-24T22:53:01.710Z"
        }
    }

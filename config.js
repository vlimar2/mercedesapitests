config = {
    "env": {         
        "qa" : {
            "urlMercedesAPI": "",
        },
        "hml" : {
           "urlMercedesAPI": "",
        },
        "staging" : {
        "urlMercedesAPI": "http://mercedesclub-stage-api.azurewebsites.net",
    },
        "prd" : {
            "urlMercedesAPI": "",
        }
    },       
    "credentials":{
        "user":"",
        "userpj":"",
        "participantdocument":"",
        "pjdocument":"",
        "pwd":"",
        "url":"",
        "participantId": "",
    },
    "USERNAME": "90672437791",
    "PASS": "123456",
    "CNPJ": "5561144120",
    "CATALOG_ID": "",
    "CLIENT_ID": 1,
    "PRODUCTS":{
        sku:"855fb95c682e41a6950e",
        productid:"fdf71157e4ab4ab29a21",
        originalid: "4393508",
        vendorid:10957,
        type: 1,
        description: "Produto teste 001",
        name: "Produto teste 001",
        originalproductid:"9472163",
        categoryid: "20949",
        subcategoryid: "20950",
        brand: {
            id:"24318",
            name:"Scalla"
        },
        price: {
            from:110,
            to:110
        }

    },
    "util": {
        "HTTP": {
            "OK": 200,
            "CREATED": 201,
            "ACCEPTED": 202,
            "BAD_REQUEST": 400,
            "UNAUTHORIZED": 401,
            "NOT_FOUND": 404
        },
        "HIGH_SECONDS": 500000,
        "DEFAULT_SECONDS": 100000,
        "CONTENT_TYPE": "Content-Type",
        "BEARER": "Bearer",
        "BASIC": "Basic",
        "BASIC_AUTHORIZATION":'',
        "ContentType": {
            "JSON": "application/json; charset=UTF-8",
            "FORM_URL_ENCODED": "application/x-www-form-urlencoded",
            "APP_JSON": "application/json"
        },
        "HEADER_AUTHORIZATION": {
            "Authorization": '',
            'Content-Type': 'application/json'
        },
        "DEFAULT_HEADER": {              
            "Authorization": "",
            "Ocp-Apim-Subscription-Key": "8f3d5c18828e4530bf70bc18889702ec"
        },
        "TOKEN_HEADER": {
            "Authorization": ""
        },
        "TOKEN_ADMIN_HEADER": {
            "Authorization": "Basic YjViZDMzZjI1ZTM4NDI1ZTk0MzI3OGIwMWFmZDE5YzY6MTIzNDU2"
            ,"Content-Type": "application/x-www-form-urlencoded"
            ,"Cache-Control": "no-cache"
        },
        "AUTH_HEADER":{
            "Content-Type": "application/json"
        }
        
    },
    "shop_showcases":[
        {
            "shop": "extra"
        },
        {
            "shop": "casas-bahia"
        },
        {
            "shop":"ponto-frio"
    }
    ]

};

module.exports = config;

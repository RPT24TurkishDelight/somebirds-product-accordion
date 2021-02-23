# somebirds-product-accordion

## Crud Operations


### GET
```
GET /products/:shoeId/summary
Replace shoeId with the ID of the product you want to review

returns 200 status code with below format.
{
    "id": 12,
    "gender": "Non-Binary",
    "name": "consequat",
    "price": 88,
    "description": "Quis sunt. Excepteur sit. Cupidatat fugiat. Aliquip. Exercitation dolore. Mollit. Eu. Dolore proident. Adipisicing. Dolore. Sit. Est adipisicing. Aute ex. Est culpa. Quis minim. Ea nostrud. Laboris magna.",
    "features": [
        "Nulla",
        "Anim"
    ]
}
```
### POST/CREATE
```
POST /products/create
Req.body:

{
  gender: 'Female',
  price: '122',
  name: 'ladidida',
  description: 'this is the description',
  features: "['stuff','stuff']"
}

will return

{
    "command": "INSERT",
    "rowCount": 1,
    "oid": 0,
    "rows": [],
    "fields": [],
    "_types": {
        "_types": {
            "arrayParser": {},
            "builtins": {
                "BOOL": 16,
                "BYTEA": 17,
                "CHAR": 18,
                "INT8": 20,
                "INT2": 21,
                "INT4": 23,
                "REGPROC": 24,
                "TEXT": 25,
                "OID": 26,
                "TID": 27,
                "XID": 28,
                "CID": 29,
                "JSON": 114,
                "XML": 142,
                "PG_NODE_TREE": 194,
                "SMGR": 210,
                "PATH": 602,
                "POLYGON": 604,
                "CIDR": 650,
                "FLOAT4": 700,
                "FLOAT8": 701,
                "ABSTIME": 702,
                "RELTIME": 703,
                "TINTERVAL": 704,
                "CIRCLE": 718,
                "MACADDR8": 774,
                "MONEY": 790,
                "MACADDR": 829,
                "INET": 869,
                "ACLITEM": 1033,
                "BPCHAR": 1042,
                "VARCHAR": 1043,
                "DATE": 1082,
                "TIME": 1083,
                "TIMESTAMP": 1114,
                "TIMESTAMPTZ": 1184,
                "INTERVAL": 1186,
                "TIMETZ": 1266,
                "BIT": 1560,
                "VARBIT": 1562,
                "NUMERIC": 1700,
                "REFCURSOR": 1790,
                "REGPROCEDURE": 2202,
                "REGOPER": 2203,
                "REGOPERATOR": 2204,
                "REGCLASS": 2205,
                "REGTYPE": 2206,
                "UUID": 2950,
                "TXID_SNAPSHOT": 2970,
                "PG_LSN": 3220,
                "PG_NDISTINCT": 3361,
                "PG_DEPENDENCIES": 3402,
                "TSVECTOR": 3614,
                "TSQUERY": 3615,
                "GTSVECTOR": 3642,
                "REGCONFIG": 3734,
                "REGDICTIONARY": 3769,
                "JSONB": 3802,
                "REGNAMESPACE": 4089,
                "REGROLE": 4096
            }
        },
        "text": {},
        "binary": {}
    },
    "RowCtor": null,
    "rowAsArray": false
}

```
x-www-form-urlencoded JSON format, modelId must be unique.

Make sure to stringify coreFeatures as it is an Array will only be accepted as a string. If the string cannot be parsed into an Array, it will be saved as a one value Array.

Will return back the new item along with 200 status code.
### PUT/UPDATE
```
/products

req.query should include id key.

{
  "features":["waterproof", "durable", "light"],
  "description":"NONONO",
  "price": 120
}

x-www-form-urlencoded JSON format, modelId must be included.

will return

{
    "n": 1,
    "nModified": 1,
    "ok": 1
}
```
Make sure to stringify coreFeatures as it is an Array will only be accepted as a string. If the string cannot be parsed into an Array, it will be saved as a one value Array.

### DELETE
```
/products

req.query should include id key.

x-www-form-urlencoded JSON format, modelId must be included.

will return

{
    "command": "DELETE",
    "rowCount": 0,
    "oid": null,
    "rows": [],
    "fields": [],
    "_types": {
        "_types": {
            "arrayParser": {},
            "builtins": {
                "BOOL": 16,
                "BYTEA": 17,
                "CHAR": 18,
                "INT8": 20,
                "INT2": 21,
                "INT4": 23,
                "REGPROC": 24,
                "TEXT": 25,
                "OID": 26,
                "TID": 27,
                "XID": 28,
                "CID": 29,
                "JSON": 114,
                "XML": 142,
                "PG_NODE_TREE": 194,
                "SMGR": 210,
                "PATH": 602,
                "POLYGON": 604,
                "CIDR": 650,
                "FLOAT4": 700,
                "FLOAT8": 701,
                "ABSTIME": 702,
                "RELTIME": 703,
                "TINTERVAL": 704,
                "CIRCLE": 718,
                "MACADDR8": 774,
                "MONEY": 790,
                "MACADDR": 829,
                "INET": 869,
                "ACLITEM": 1033,
                "BPCHAR": 1042,
                "VARCHAR": 1043,
                "DATE": 1082,
                "TIME": 1083,
                "TIMESTAMP": 1114,
                "TIMESTAMPTZ": 1184,
                "INTERVAL": 1186,
                "TIMETZ": 1266,
                "BIT": 1560,
                "VARBIT": 1562,
                "NUMERIC": 1700,
                "REFCURSOR": 1790,
                "REGPROCEDURE": 2202,
                "REGOPER": 2203,
                "REGOPERATOR": 2204,
                "REGCLASS": 2205,
                "REGTYPE": 2206,
                "UUID": 2950,
                "TXID_SNAPSHOT": 2970,
                "PG_LSN": 3220,
                "PG_NDISTINCT": 3361,
                "PG_DEPENDENCIES": 3402,
                "TSVECTOR": 3614,
                "TSQUERY": 3615,
                "GTSVECTOR": 3642,
                "REGCONFIG": 3734,
                "REGDICTIONARY": 3769,
                "JSONB": 3802,
                "REGNAMESPACE": 4089,
                "REGROLE": 4096
            }
        },
        "text": {},
        "binary": {}
    },
    "RowCtor": null,
    "rowAsArray": false
}
```
Make sure to stringify coreFeatures as it is an Array will only be accepted as a string. If the string cannot be parsed into an Array, it will be saved as a one value Array.

## Repo - For Local Setup
```
npm install
```

Make sure to install **Mongo** on your system. Please refer [here](https://docs.mongodb.com/manual/installation/) for documentation to get started if not already installed.

Webpack and webpack cli should both be installed to run build scripts and create a bundled file. If you don't already have them install globally, you may run the following commands:
```
npm install --save-dev webpack
npm install --save-dev webpack-cli
```
If you do already have webpack installed, please continue on to seed the database and bundle the app.

```
npm run db:seed
npm run build
npm start
```

At this point there should be a database set up locally called somebirds, with a collection called shoes inside. There should be about 100 entries, with the first being a realistic example of meta-data for a shoe. The server should now be running. Open the application in your browser at **localhost:3002**. What should be available there is an accordion component that contains some of the data listed of the realistic example.
**Model Name**: mens-wool-runners.

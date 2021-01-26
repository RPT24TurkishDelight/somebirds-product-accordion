# somebirds-product-accordion

## Crud Operations


### GET
```
GET /products/:shoeId/summary
Replace shoeId with the ID of the product you want to review

returns 200 status code with below format.
{
    "coreFeatures": [
        "Renewable Materials",
        "Machine Washable",
        "Aerodynamic",
        "Flexibly Conforms To Your Movements"
    ],
    "_id": "60064d31a09b5860ae8cb8a9",
    "modelId": 2,
    "gender": "men's",
    "name": "tree dashers",
    "price": 120,
    "description": "Our most technical shoe yet, the Tree Dasher reimagines the traditional running shoe with natural materials engineered for serious performance. - Heel Drop: 7mm (Forefoot: 15.5mm, Heel: 22.5mm) - Type: Neutral, Cushioned, Light Stability Running Shoe",
    "__v": 0
}

```
### POST/CREATE
```
POST /products/create

{
  "coreFeatures":["waterproof", "durable"],
  "modelId":200,
  "description":"trololololo",
}

will return

{
    "coreFeatures": [
        "waterproof", "durable"
    ],
    "_id": "600c89385335144d3119219f",
    "modelId": 200,
    "description": "trololololo",
    "__v": 0
}
```
x-www-form-urlencoded JSON format, modelId must be unique.

Make sure to stringify coreFeatures as it is an Array will only be accepted as a string. If the string cannot be parsed into an Array, it will be saved as a one value Array.

Will return back the new item along with 200 status code.
### PUT/UPDATE
```
/products/update

{
  "coreFeatures":["waterproof", "durable", "light"],
  "modelId":200,
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
/products/delete

{
  "coreFeatures":["waterproof", "durable"],
  "modelId":200,
  "description":"trololololo",
}

x-www-form-urlencoded JSON format, modelId must be included.

will return

{
    "n": 1,
    "ok": 1,
    "deletedCount": 1
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

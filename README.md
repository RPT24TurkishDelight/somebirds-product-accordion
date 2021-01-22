# somebirds-product-accordion

## Crud Operations
```


GET /products/:shoeId/summary
Replace shoeId with the ID of the product you want to review

POST /products/create

x-www-form-urlencoded JSON format, modelId must be unique.

/products/update

x-www-form-urlencoded JSON format, modelId must be included.

/products/delete

x-www-form-urlencoded JSON format, modelId must be included.


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

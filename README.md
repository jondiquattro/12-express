![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Project Name
Express API Server
### Author: Student/Group Name
Hannah Ingham and Jon DiQuatrro

### Links and Resources
* [repo](https://github.com/jondiquattro/12-express/pull/3)
* [travis](https://www.travis-ci.com/jondiquattro/12-express)
* [heroku](https://lab-12-diquattro.herokuapp.com/)


### Modules
#### `modulename.js`
##### Exported Values and Methods

### Setup
#### `.env` requirements
* `PORT` - 30000
* `MONGODB_URI` - URL to the running mongo instance/db

#### Running the app
* `npm start`
* Endpoint: `http :3000/`
  * returns everything in the products table
* Endpoint: `http :3000/products/id (should be the actual id of the item you are trying to pull`
  * Returns a single object as specified by the id
* Endpoint: `http post :3000/products`
  * posts an object to the products table
* Endpoint: `http put :3000/products/id (should be the actual id of a record)`
  * updates the item
* Endpoint: `http delete :3000/products/id (should be the actual id of a record)`
  * Deletes the item specified

#### Tests
* How do you run tests?
    cd into the test file and run npm test
* The error routes are tested
* The correct results are tested




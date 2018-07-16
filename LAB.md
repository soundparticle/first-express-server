First Express Server
======

This is a single resource API using Express, using mongodb as the database.

## Directions

This is a **solo** lab.

* Pick a "resource" for your API, like `penguins`
* Implement:
    * `GET /<resource>` - returns array of all of the resources
    * `POST /<resource>` - inserts the supplied request body as a document into the resource collection
    * `GET /<resource>/:id` -
      * returns the single object specified by the id
      * returns 404 not found if no resource found with that id    
    * `DELETE /<resource>/:id` - removes the resource with that id
      * **not** an error if doesn't exist. 
    * `PUT /<resource>/:id` - updates the resource with supplied request body
* Use plural name in your url path (`/penguins`, **not** `/penguin`)

## Architecture and Design

* Use the **structure** we used in class.
* Follow the **process** we used in class to build up both your model and route

## Testing

* Create `request.js` helper class for opening and closing the http server
* Create `_db.js` helper class for loading `process.env` and calling the `mongodb` module. It should also
close the server on an `after`

## Rubric

* Server, App, Project Organization: *1pt*
* Each tested API endpoint
  * `GET` all: *1.5pts*
  * `POST`: *1.5pts*
  * `GET` by id: *1.5pts*
  * `GET` by id with 404: *1.5pts*
  * `PUT` by id: *1.5pts*
  * `DELETE` by id: *1.5pts*

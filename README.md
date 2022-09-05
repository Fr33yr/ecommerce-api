# ecommerce-api

## How it works 
It requires a mongodb database url to connect.<br/>
 relevant links: https://www.mongodb.com/docs/guides/atlas/connection-string/ <br/>

The endpoints in local development:
 - http://localhost:8080/api/products?search="itemName"
 - http://localhost:8080/api/product/:id
 
## Why mongodb?
I chose mongodb because I already had experience in nosql databases with firebase, but I wanted to try something new and also the pricing of mongodb allowed me to try other nosql db.

## Things to improve
- I will add more routes and pagination.
- Also a way to add and delete documents from the db.

### required dependencies
- express
- mongoose
- cors

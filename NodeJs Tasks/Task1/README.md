# ecommerce WebApi using NodeJS

Create an ecommerce WebApi using NodeJS (ExpressJs). Implement Nodejs Authentication with JWT Token and Refresh token. Once the user authenticated with the server, use should be able to add book, delete book, update book and get books and implement same crud operations for author. Please consider following practices while developing WebApi.
<br />

1. For Data persistence use mongodb.
2. For Validation use Joi.
3. For Logging use Pino.
   <br />
   > Book Schema: -
   > &ensp;id: guid,
   > &ensp; title: string,
   > &ensp; price: integer,
   > &ensp; page_count: integer,
   > &ensp; image_url: string,
   > &ensp; description: string
   > &ensp; author: guid,
   > &ensp; comments: array of strings
   > <br />
   > Author Schema: -
   > &ensp; id: guid,
   > &ensp; name: string,
   > &ensp; books: array,
   > &ensp; image_url: string,
   > &ensp; description: string

# ecommerce WebApi using NodeJS

Create an ecommerce WebApi using NodeJS (ExpressJs). Implement Nodejs Authentication with JWT Token and Refresh token. Once the user authenticated with the server, use should be able to add book, delete book, update book and get books and implement same crud operations for author. Please consider following practices while developing WebApi.
<br />

1. For Data persistence use mongodb.
2. For Validation use Joi.
3. For Logging use Pino.
   <br />
   > Book Schema: - <br/>&ensp;id: guid, <br/>&ensp;title: string, <br /> &ensp;price: integer, <br /> &ensp;page_count: integer, <br />&ensp; image_url: string, <br />&ensp; description: string <br />&ensp; author: guid, <br />&ensp; comments: array of strings <br /> <br /> <br />
   > Author Schema: -<br/> &ensp; id: guid, <br /> &ensp; name: string, <br /> &ensp; books: array, <br /> &ensp; image_url: string, <br /> &ensp; description: string <br />

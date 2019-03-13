### `GET /api/reviews/:review_id`
Returns all reviews atreviewestaurant id.

 **URL Params**
  * `review_id` _(Number)_ : ID of the restaurant to retrieve all relevant details

 **Success Response:**
  * **Status Code:** 200
  * **Content:** Reviews conforming to the following format:

 **Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

 ### `POST /api/reviews/:review_id`
Returns the `review_id` of the photo created in the database.

 **Success Response:**
  * **Status Code:** 201
  * **Content:** Post review conforming ot the following format

 **Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

 ### `PUT /api/reviews/:review_id`
Returns the `review_id` of the photo edited in the database.

 **URL Params**
  * `review_id` _(Number)_ : ID of the photo to update

 **Payload Params**
  * Valid `{ JSON }` object conforming to the following format:

 **Success Response:**
  * **Status Code:** 201
  * **Content:** Update review conforming to the following format:

 **Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

 ### `DELETE /api/reviews/:review_id`
Returns the review deleted from the database.

 **URL Params**
  * `review_id` _(Number)_ : ID of the photo to delete

 **Success Response:**
  * **Status Code:** 200
  * **Content:** Delete review conforming to the following format:

 **Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`
## **_api-auth-deploy-mobile-store_**
[🚀 Deploy on render ](https://api-auth-deploy.onrender.com)

| * (404) | /bad-path        | Return a 404 Error message                                         |


## **_END POINTS MOBILES _**

| HTTP     | ENDPOINT                              |                                                                    |
| -------- | ------------------------------------- | ------------------------------------------------------------------ |
| GET      | /api/mobiles     | Get all mobiles in DB                                              |
| GET      | /api/mobiles/:id | Get from DB mobile with the id choosen                             |
| POST  (auth required)   | /api/mobiles     | Create a new mobile in DB with the body data                       |
| PUT  (auth required)     | /api/mobiles/:id | Update the mobile in the DB with the id choosen with the body data |
| DELETE  (auth required)  | /api/mobiles/:id | Delete from DB mobile with the id choosen                          


## **_END POINTS MANUFACTURERS _**

| HTTP     | ENDPOINT                                    |                                                                          |
| -------- | ------------------------------------------- | ------------------------------------------------------------------------ |
| GET      | /api/manufacturers     | Get all manufacturers in DB                                                 |
| GET      | /api/manufacturers/:id | Get from DB manufacturer with the id choosen                             |
| POST  (auth required)    | /api/manufacturers     | Create a new manufacturer in DB with the body data                       |
| PUT      | /api/manufacturers/:id | Update the manufacturer in the DB with the id choosen with the body data |
| DELETE (auth required)   | /api/manufacturers/:id | Delete from DB manufacturer with the id choosen                          |
                                              


## **_END POINTS SMARTWATCHES _**

| HTTP     | ENDPOINT                                    |                                                                          |
| -------- | ------------------------------------------- | ------------------------------------------------------------------------ |
| GET      | /api/smartwatches    | Get all smartwatches in DB                                                 |
| GET      | /api/smartwatches/:id | Get from DB smartwatch with the id choosen                             |
| POST   (auth required)  | /api/smartwatches     | Create a new smartwatch in DB with the body data                        |
| PUT     (auth required) | /api/smartwatches/:id | Update the smartwatch in the DB with the id choosen with the body data |
| DELETE  (auth required) | /api/smartwatches/:id | Delete from DB smartwatch with the id choosen                          |
                                              

## **_END POINTS USERS _**

| HTTP  | ENDPOINT      |                           |
|--------------|-----------------|---------------------------------------|
| GET   (auth required)        | /users          | Get all users                   |
| POST         | /users/register | Register new user                     |
| POST         | /users/login    | Login user                            |
| PUT    (auth required)      | /users/:id      | Add avatar to user with the id choosen  |
| DELETE  (auth required)     | /users/:id      | Deregister user with the id choosen                  |
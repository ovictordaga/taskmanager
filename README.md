# taskmanager

Welcome to TaskMe - Your personal task manager

This is a task manager made entirely in HTML CSS and JavaScript. With functions to add, remove and edit tasks.

see the demo at: https://victordaga.github.io/taskmanager

For this demo the files are being saved locally, so that even if the page is closed the data is saved. This way it is possible to see and test the experience of using the WebApp, even without the BackEnd.

For the BackEnd a structure with the Flask Framework and a database in SQL or MongoDB was designed. Unfortunately, GItPages works statically and doesn't allow you to structure a database itself.

The BackEnd project was designed as follows:
-The frontEnd communicates via GET/POST requests with the flask server(Which can easily be in GCP, AWS or AZURE);
-The flask Server will receive the requests and make a data validation (even for security reasons) and the data processing, and then it will make the queries to the database
-The Database will initially have 2 tables:
  -loginTable: for Login purposes where hash and user data will be stored
  -dataTable: Where the id's and jsons containing the tasks and preferences of each user will be stored
The Database will then return the values requested by the query to the flask server and it will direct to the corresponding route and return the request.

Unfortunately, due to the deadline, I wasn't able to properly develop and deploy the backEnd on the Cloud.

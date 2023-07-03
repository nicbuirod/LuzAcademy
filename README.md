# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


# Luz Academy

Luz Academy is an application that allows administrators to easily publish and manage various video courses. This application also integrates a payment system through Epayco. Additionally, it offers users the ability to create an account with password protection and purchase available courses. Users can access a personal area to manage their purchased courses and track their progress. Luz Academy was developed using React on the front-end, Node.js on the back-end, and utilizes MongoDB as the database. During development, additional technologies and libraries such as Mongoose, Material UI, Sass, and Express were used.

The application is hosted and can be accessed directly through the URL [luz.academy](https://luz.academy). Please note that in order for the application to load course information, the API service must be running. Also, if the URL of the available API changes, the service addresses in the application need to be updated accordingly.

The services target the following endpoints:

| Endpoint         | HTTP Verb | Description                    |
|------------------|-----------|--------------------------------|
| User             | POST      | Create a new user              |
| User/:id         | POST      | Add a course to a user         |
| User/:id         | GET       | Get courses of a user          |
| Course           | POST      | Create a new course            |
| Course           | GET       | Get all courses                |
| Course/:id       | GET       | Get a course by its ID         |
| Course/:id       | PUT       | Update a course by its ID      |
| Course/:id       | DELETE    | Delete a course by its ID      |
| Class            | POST      | Create a new class             |
| Class            | GET       | Get all classes                |
| Class/:id        | GET       | Get a class by its course ID   |

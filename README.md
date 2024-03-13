Happpy to share my new Blog App Food Recipes

Technologies used in building that Applicaion 
"MERN STACK TECHNOLOGIES"

BACKEND SETUP:-
first we are creating backend server using commmand
"npm init -y"
then we are creating index.js file in this file we have creating route also 
and we are using .env file to access mongodb cluster for database 

then we are creating routes like
SignUp:   LogIn : AllBlogs:  AllBlogs/add: AllBlogs/:id: AllBlogs/Delete/:id: AllBlogs/edit/:id: 

we are using middleware cors, bodyParser, 

we are using gensalt and jsonWeb Token and secrete key  
we are using bcrypt for hashing password and comparing verifying

FROTEND SETUP :- 
first we are creating frontend react app using commmand
"npx create-react-app blogs"

then we have source folder we are creating components folder in that file 
we have Navbar, LogIn, SignUp, Home, AddBlog, EditBlogs, Blogs, Footer, NotFound reusable components
we are creating index.js and index.css file we are linking the file index.css by importing it

LOGIN:-
      we are have login form in this we have heading, label, inputs, and Submit Button 
      when we clicking on submit button if we are authorize user so data of user is 
      (username, email, password) is stored in localStorage 
      we also have the text link for new user to navigate to SIGNUP page

SIGNUP:- 
      we are have signup form in this we have heading, label, inputs, and Submit Button 
      we also have the text link for new user to navigate to LOGIN page.

HOME:- 
      we are having Navbar and blogs page in this page we are showing all blogs using the data from 
      data base then we are fetching data and after that and showing the data with the help of html code  
      for styling we have index.css file we have addButton when we are clicking on it we are navigate to 
      addBlogs component form with the help of LINK by react-router-dom and  when ew are clicking on blogs
      image are text we are navigate to blog page 
      
BLOG:- 
      we are having Image recipes text and author name , and two buttons we are using react-icons for this
      when clicking on delete button the blog are deleted and we are navigate to home page and when we are 
      click edit icon we are navigate to edit form 

Edit: 
      we are having edit form and back button to return home page and submit button to submit the all 
      the recipes details.
      
Navbar:- 
      we are having navbar components on top of home components we have logo blogs we having 
      diferent page Link on it and we have avatar image when we clicking on it we have 
      seen popup screen in this we have user image, name , email











      




















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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

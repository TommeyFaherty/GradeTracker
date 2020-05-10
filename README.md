Description
==============
This application is a web application made for students to easily keep track of their grades through an academic term. It will provide the user with clear information so they can see where they are excelling and otherwise where more time should be dedicated to. Our web based application is aimed towards providing the user with information in a clear and concise manner. This way the user may combat negative results in their own way. We are striving for a simplistic and well designed application so it is easy to navigate. The app allows the user to log in/log out and navigate the application through it's side menu. 
# Running the web app
***
If you are planning on running our web-application locally you will need Node.js to make several installations. 

## Getting Ionic Project running

**npm install -g @ionic/cli**

**npm i firebase**

**npm install redux**

**npm install react-redux --save**

**npm install @types/react-redux**

**npm install node-sass**

After you have finished installing these, to run the web application locate where you cloned the repository and redirect the command-line into *GradeTracker/grade-tracker-app*

Type: **ionic serve** This starts a local dev server for app dev/testing 

However you can visit the web application on your browser: **https://gradetracker-6f72c.firebaseapp.com/**



# App Features

<ul>
    <li> Firebase is hosting the application. </li>
    <li> The layout of the application is clear. There is no unnecessary clutter. </li>
    <li> When the user first enters the web application’s URL into the browser they are brought to the Log In page. </li>
    <li> If  the  user  does  not  have  an  account  they  are  instructed  to  click  a  link  that redirects them to the register page. </li>
    <li> If the log in or registration details are incorrect there is a toast displayed at the bottom of the screen explaining the issue. </li>
    <li> Once the user is registered or logged in they are then redirected to the Course Management page. </li>
    <li> At the top of the Course Management page the application greets the user. </li>
    <li> Only one input box is shown initially on the Course Management page. </li>
    <li> When  the  current  course  is entered and the enter button is pressed, more input boxes are shown. </li>
    <li> When all details are entered they are stored in the firebase database. The toast on the bottom of the page indicates this. </li>
    <li> The log in button changes to a log out button on the course management page.</li>
    <li> When the log out button is clicked, the user is redirected to the home page.</li>
    <li> The homepage explains the functionality of the application. </li>
 </ul> 

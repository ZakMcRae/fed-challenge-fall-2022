# fed-challenge-fall-2022
Shopify Front End Developer Intern Challenge - Fall 2022

## Try my App
[Click here to open app](https://zakmcrae.github.io/fed-challenge-fall-2022/)

## The Challenge
You will write an app that sends plain text prompts to the OpenAI API and displays the results in a list.

We'd like your app to have a simple-to-use interface that includes the following:
 - A form for entering text prompts
 - Submitting the form sends the prompt to the OpenAI API
 - Results are displayed in a list, sorted from newest to oldest. Each result should include the original prompt and a response from the API.

## My Application
I chose to do the app using React as my framework, regular css (in App.css), and Vite for tooling.
The src directory has a components directory for React components, a util directory for utility functions and a data directory containing app data (example prompts).

For the extra tasks I chose and implemented 2 of the suggestions:
 - Save responses if the user leaves or reloads the page
   - Accomplished using localstorage to get and set responses
 - Add some presets for the user to quickly send a good prompt
   - Accomplished using a .json containing example prompts and a Random Prompt button

## Running the App locally
 - Clone the git repository
 - cd into the cloned repository
 - run ```npm install``` (installs node modules)
 - rename example-config.js to config.js and fill in your api key
 - run ```npm run dev``` (starts app on http://localhost:3000/)

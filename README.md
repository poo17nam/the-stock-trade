# The Stock Trade

> A Vue.js based stock trading app that simulates a simple trading environment wherein one can buy, sell stocks based on the funds one owns.

## Features

* <b>Trade : </b>
  * Buy Stocks
  * Sell Stocks
* <b>Save and load data : </b>
  * Save your trade result
  * Load the saved trade
* <b>End day : </b>
  * It ends the day and updates the original stock prices.

[See it live!](https://the-stock-trade.herokuapp.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node, NPM, vue-cli installed.

### Steps

Clone the repository
```
$  git clone git@github.com:poo17nam/the-stock-trade.git
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

Application becomes available on http://localhost:8080/

# build for production with minification
npm run build
```

## Steps to deploy the app on Heroku


Install Heroku CLI
```bash
$ npm install -g heroku-cli
```
To verify your CLI installation, use the following command:
```bash
$ heroku --version
# You should see heroku-cli/x.y.z
```

Run following to log-in with your Heroku account credentials:
```bash
$ heroku login
#Enter your Heroku credentials.
#Email: adam@example.com
#Password (typing will be hidden):
#Authentication successful.
```

Create your Heroku App
```bash
# The name chosen for this project is the-stock-trade, you have to choose a unique name for your project deployment.
$ heroku create <YOUR-PROJECT-NAME-HERE>
```

When this is done, you’ll get a URL to your project.

Setup the NODE_ENV setting to production
```bash
# in order to avoid having Heroku install needless development dependencies when deploying later
$ heroku config:set NODE_ENV=production --app <YOUR-PROJECT-NAME-HERE>
```

 Git Init and Add Your Heroku Remote Repository
 ```bash
 $ git init
 $ heroku git:remote --app <YOUR-PROJECT-NAME-HERE>
 $ git add . && git commit -a -m "Adding files."
 $ git push heroku master
 ```

 If deployment is successful, your app would be available on your project’s URL and you’re done!

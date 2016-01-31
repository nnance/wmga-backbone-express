# wmga-backbone-express

This is the site for the Westwood Men's Golf Association(WMGA).  It is a single page web app built with Backbone served by NodeJS.  The stack includes:

### Front End
The web application has the primary technology stack:
* Backbone
* underscore
* JQuery
* Bootstrap 3
* Require JS

### Back End
The backend application has the following stack:
* Nodejs
* Express
* MongoDB

### Hosting / Integration
The application is being on Heroku with the MongoLab providing the DB hosting.  Many features of the application depend on the following services:
* Amazon S3 - File storage for file uploads from the site
* PayPal - Payment processing integration for member and team dues
* Mandrill - Provides email delivery
* GoDaddy - Domain name registration

## Getting Started
In order to build, deploy or develop changes in the application you must have the following installed:
* NodeJS (with npm)
* MongoDB

Once you have these dependencies installed you can run the following commands to get started.  You will only need to run this once.
```
git clone https://github.com/nnance/wmga-backbone-express.git
cd wmga-backbone-express
npm install
npm run bower:install
```

### Create local database
The following command will create a local database.  This will only need be ran once.
```
mongo
> use wmga-express-development
```

### Useful commands
To run the system in development mode with live reload use
```
npm run watch
```

To build a production version
```
npm run build
```

To run the linter
```
npm run lint
```

To run the test suite
```
npm run test
```

To run the system in production mode. WARNING: this will connect to the production db
```
npm start
```

## CI and Deployment
The project is setup in Github with a hook to the CircleCI continuous integration services.  Once changes are pushed to master CircleCI will pull down the changes, run the tests, build the software.  If the tests and build is successful it will automatically deploy to Heroku.

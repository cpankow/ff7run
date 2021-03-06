# FFVII Runs Website

[![Build Status](https://travis-ci.org/konkers/ff7run.svg?branch=master)](https://travis-ci.org/konkers/ff7run)

This is the code that backs the website [ff7.run](https://ff7.run).

## Code organization

The code in this repos is divided into 3 sections:

* `shared` code that lives in `projects/shared`.  The data model, main run 
  logic, and data live here.
* `frontend` code that lives in the repo root.  It is implemented using angular.
  The most interesting bits live in `src/app`.
* `backend` code that lives in `functions`.  The backend is implemented using
  Firebase functions.  All writing to the database is done here.  The front end
  only sees read-only views.


## Development

### Setup

#### System packages.

To develop, you'll need to install:
* [Node JS](https://nodejs.org/)
* [OpenJDK](https://openjdk.java.net/) (for the firebase emulators)

#### Global NPM dependencies.

Once installed, install the Typescript, Angular, and Firebase CLI utilities:

```sh
npm install -g typescript
npm install -g @angular/cli
npm install -g firebase-tools
```

#### Local NPM dependencies.

You'll also need to instal npm depedancies for the frontend and backend:

```sh
npm install
(cd projects/shared; npm install)
(cd functions; npm install)
```
### Data Development

Data is stored in `projects/shared/src/lib` in JSON5 format.   The files are
converted to json for consumption by the frontend and backend using:

```sh
(cd projects/shared; npm run convert-data)
```

### Frontend development

First build the backend and start the firebase emulators:

```sh
(cd functions; npm run build) && firebase emulators:start
```

Once that's started, start the angular dev server:

```sh
ng serve
```

The app will now be running at `http://localhost:4200/`. The app will automatically
 reload if you change any of the source files.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Checking code before pushing

Run `ng lint` as well as `npm run fmt:check` before pushing code/sending a pull request.

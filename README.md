# Questions

> This repository was made to demonstrate the process of jumping in to a new codebase. This repository was developed for
> BU ENG EC327, full content can be
> found on Sam Howes' website: [opinion.samhowes.com](https://opinion.samhowes.com). todo(#)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

To contribute to this project, see [Contributing.md](./contributing.md)

# Intro

* This project is a Single Page Web Application implemented in Angular + TypeScript.
* This project is designed to be run on a Desktop Web Browser, mobile browsers may work, but are not explicitly
  supported at this time.
* The entry point of this application is: [src/index.html](./src/index.html)
* Index.html subsequently loads: [src/app/app.component.ts](./src/app/app.component.ts) which is the entry point for
  application code.

# Dependencies

## Required Tools

The following development tools must be installed on your machine to use this repository:

1. Node.js: LTS version 18 was used at the time of writing: [install link](https://nodejs.org/en/)
2. Npm: npm will be installed along with node.js
3. yarn: yarn is used as the package manger, install with `npm install -g yarn` after installing node.js
4. Angular CLI: the Angular CLI, invoked as `ng` is used to build and generate code. Install
   with `npm install -g @angular/cli`
5. Google Chrome: Google chrome is the reccomended web browser to develop
   with: [download link](https://www.google.com/chrome/)

## Code Dependencies

This repository uses yarn as the package manager to download external dependencies. External dependencies are specified
in [package.json](./package.json)

Run `yarn install` to install the dependencies for the build.

# Building

This repository uses the Angluar CLI to build. You can simply invoke `ng build` anywhere inside the repository. The
build is configured in [angular.json](./angular.json).

## Build Output

The output of `ng build` is copied to the `[dist/questions](./dist/questions)` folder.

# Running

The Angular CLI will serve this web application by running `ng serve`.

Ng Serve is very convenient: it will automatically rebuild any code changes and automatically reload the browser with
those changes. This is known as "live reload".

After running `ng serve`, open your browser to [https://localhost:4200](https://localhost:4200) to see the app.

## Environment

This app requires that port 4200 is unused on your machine.

## Data

This app stores data in local storage of the browser and does not have any external data dependencies

TODO(#18): use firebase for data storage.

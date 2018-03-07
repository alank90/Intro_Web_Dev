# Intro to Web Development Home Page
Companion to class.

## What's in this project
Links and additional references to material in the course.

### index.js
This will be used by budo to start up things.

You'll include all your JS libs here

Look at the `start` script in the `package.json`

### index.html
Has references to `main.css` and (**importantly**) `index.js`.

### main.css
Pretty obvious

### main.js
Inside `src/js/` is where all the JS is. That's where we include the one library that we use - `domready` - to generate the `index.js`

## Get going
1. Clone this repo
2. `cd` into the resultant dir
3. Run `npm install` to get the dependencies
4. Run `npm start` to launch the project in your default browser running on a local (`Node`-based) web server with `livereload` - all setup.

That's it. If you want a project with plain vanilla JS and CSS that's all you need.

## Building the project for deployment
Well, this may be a rapo but we might still want to push this onto a prod environment. A apache server or something of the sort.

To generate a prod output, I've also created a `build.js` file that run using:
```
npm run build
```
This creates a build dir that includes all you need to push to prod.
### Testing the build
If you want to check the build - Just to make sure:
```
npm run testbuild
```
This runs `budo` on the build

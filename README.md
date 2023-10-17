# Fileverse

Web3’s Simplest Way to Share Files, Collaborate and Coordinate.

Your personal collaboration tool and workspace for on-chain file management and content creation, all without cutting corners on privacy and decentralisation.

Visit [Fileverse](https://fileverse.io/) now to experience it live.

# Getting Started

Clone the repository using the following git command:

```
$ git clone git@github.com:fileverse/fileverse-dapp.git
```

Make sure you have Node.js and npm installed in your system and then run:

```
$ cd fileverse-website-v2
$ npm install
```

### To run in development mode:

```
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

### To make production build:

```
$ npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Directory Structure

The basic folder structure of the project is:

```
fileverse-dapp
│
├─── components
├─── pages
├─── public
|   ├── assets
├─── styles
|   .env
|   .eslint
|   .gitignore
|   .prettierrc
|   config-overrides.js
|   package-lock.json
|   package.json
|   tailwind.config.js
|   tsconfig.json
```

### Folders

## `components/`

This folder contains all the source code that are built into the project.

**`pages/`** Contains code for pages displayed in each route.

**`public/`** All the assets like image and icons are stored in this folder.

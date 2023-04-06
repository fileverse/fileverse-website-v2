# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
pnpm create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

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

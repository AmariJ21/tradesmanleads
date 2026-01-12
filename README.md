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


# 1. Clone or copy your project folder to the new device
cd C:\Your\Project\Location

# 2. Install ALL dependencies (reads from package.json)
npm install

# This installs everything including:
# - React
# - Tailwind CSS v3
# - lucide-react
# - All other dependencies

# 3. Run the app
npm start
```

## What Gets Installed:

Based on your setup, you need:
- **Tailwind CSS v3** (NOT v4)
- **lucide-react** (for icons)
- **autoprefixer** and **postcss**

## Files to Transfer:

Make sure you copy these to the new device:
```
customer-dashboard/
├── src/               ← Your code
├── public/            ← Public assets
├── package.json       ← Lists all dependencies
├── package-lock.json  ← Locks versions
├── tailwind.config.js
├── postcss.config.js
└── .gitignore
### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

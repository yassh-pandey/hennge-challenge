## Sample UI provided to built 
- This is how empty mail box is expected to look:

![mailbox empty](https://github.com/yassh-pandey/hennge-challenge/blob/master/design%20specification/sample0.png)

- This is how populated mail box is expected to look:

![mailbox populated](https://github.com/yassh-pandey/hennge-challenge/blob/master/design%20specification/sample1.png)

- Mailbox on mobile viewport 

![responsive mailbox](https://github.com/yassh-pandey/hennge-challenge/blob/master/design%20specification/sample2.png)

## How to view the mockup

Please follow the guide below to install the project. This project uses react-router-dom so different views are available on 
specific routes relative to http://localhost:3000 .

**NOTE:** When you open the link : http://localhost:3000/inspect for mission 3 then there is a UI component: \<ToggleButton\> which will be displayed on the top right corner of the screen. This button acts like a switch to show multiple emails at the same time and is turned on by default. I have added a max limit of 3 email bodies that you can inspect together at the same time and then the last element in the stack will be removed (from behind) if you click on the 4th email. Play with the website to know more or contact me via email if you have any doubts.

- Mission 1 is available at: <br/>
&nbsp;&nbsp;&nbsp;&nbsp; 1. http://localhost:3000/ :  To see the EMPTY mail box component please open this url in your browser. <br />
&nbsp;&nbsp;&nbsp;&nbsp; 2. http://localhost:3000/imbox : To see the POPULATED mail box component please open this url in your browser. <br />

- Mission 2 is available at: <br/>
&nbsp;&nbsp;&nbsp;&nbsp; 1. http://localhost:3000/inspect :  To see the redesigned mail box component which lets you inspect multiple  emails at a time please open this url in your browser.

- Mission 3 is available at: <br/>
&nbsp;&nbsp;&nbsp;&nbsp; 1. http://localhost:3000/views: To see my views and opinion on the UI please open this url in your browser.<br/>

**Change the Viewport of the browser via developer tools to see the responsive layout.**


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

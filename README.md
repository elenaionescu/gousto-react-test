#Gousto Product Search API in React and Redux

##Installation
Clone the repo and ```npm install``` in the working directory to install dependencies.

For cross origin accessibility please disable cross origin restrictions in your browser. Safari: Develop/Disable Cross Origin Restrictions, Chrome: install the [Allow-Control-Allow-Origin](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi) plugin.

##Running
Use ```npm run start``` and navigate to [http://localhost:8080/](http://localhost:8080/) in your browser of choice to run the project locally.

Use ```npm run test``` to start the test environment.

Use ```npm run build``` to build for deployment.

##Synopsis
For a project of this small size, I have separated concerns horizontally. That is to say, files are organised by the role they play in the application. Unit tests are kept in a single location. In a commercial application, concerns are better separated vertically: The src contains a module for the categories along with its tests, reducers, actions, components.  This enables large teams to work on different areas of an application while minimising conflicts in version control and maximising application scalability.

I opted for a very simple Webpack configuration.  This could be extended later on.

The application is separated into three main parts, rendered by the App.js file: ```Categories```, ```ProductSearchInput``` and ```Products```.  State from Redux is injected into the presentational components via Redux container components and asynchronous calls to the Gousto API are handled via redux-thunk and Axios.  Relevant data from the API responses are mapped to state by the reducer. The ```id``` properties of items in the responses are used to provide the unique ```key``` prop required by React for components rendered from arrays.

Functional components have been used wherever possible, to maintain simplicity.  Only the parent presentational components are ES6 classes.  This is so that they can make use of the componentDidMount lifecycle method to call the thunks.

As a nod to the principles of atomic design, I have created React components for all fragments of the application, from the parent ```App``` container down to the ```ProductDescription```.  State, actions and event handlers are passed down to the 'atom' components from the containers in the 'organism'.  The ```Products``` molecule also receives state from ```ProductSearchInput``` and ```Categories```, so that the Product state can be filtered according to input from the user.  The product filtering is handled by a helper function to simplify the rendering of ```Products``` by abstracting the logic used to determine if a category is selected and/or if a value exists in the input.

Styling has been kept very simple.  For a larger application I take a more modular approach to styling, usually opting for SCSS preprocessing and vertical separation of concerns.  I did not think it necessary to use a preprocessor for a project of this size.

// 1- Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import AuthService from './services/AuhService';

// 2- Create a react component
const App = () => { // equalt to const App = function => { ...
  const buttonText = { text: 'Click me!' };
  const labelText = 'Enter name:';
  const authService = new AuthService();

  //'{}' is using for JS codes like {labelText}
  // If you want to show another component you have to use GSX tags
  return ( // return JSX (JSX will turn into JS with Babel(https://babeljs.io/))
    <div>
      <label className="label" htmlFor="name">
        {labelText}   
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }} onClick= { () => {authService.login();}}>
        {buttonText.text}
      </button>
    </div>
  );
};

// 3- Take the react component and show it on the screen
// Get the App component that we create above, put it into GSX tags (like html tags)
// Take our component and render it or display it inside of this div with ID root
// We have 'index.html' file in puplic folder - <div id="root"></div>
ReactDOM.render(
    <App />, 
    document.querySelector('#root') // querySelector is native for all browsers
);
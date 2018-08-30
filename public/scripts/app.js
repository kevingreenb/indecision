'use strict';

console.log('App.js is running!');

// only render the subtitle and the p tag 
// subtitle exists logican and operator

//Render new p tag if options.length > 
// 0 "Here are your options" || "No option"
// ternary 


const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
  // JSX - JavaScript XML
};

const template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title && app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

const user = {
  name: 'Kevin Green',
  age: 18,
  location: 'Illinois'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  } else {
    return 'Unknown';
  }
}

const templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    true ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

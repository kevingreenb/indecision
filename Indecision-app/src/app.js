console.log('App.js is running!');

// only render the subtitle and the p tag 
// subtitle exists logican and operator

//Render new p tag if options.length > 
// 0 "Here are your options" || "No option"
// ternary 


var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One','Two']
}
// JSX - JavaScript XML
var template = (
  <div>
    <h1>{(app.title) && app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length >0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: 'Kevin Green',
  age: 18,
  location: 'Illinois'
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
  else {
    return 'Unknown';
  }

}

var templateTwo = (
  <div>
    <h1>{true ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >=18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

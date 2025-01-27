import React from 'react';
import ReactDOM from 'react-dom/client';
import MyApp from './App';

// const ReactElement = {
//   type:'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   }
//   children: 'Click me to visit google'
// }

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visit google</a>
// )

// function MyApp(){
//   return(
//     <div>
//       <h1> Hi I am Vishal Rao | A software Developer? </h1>
//     </div>
//   )
// }
const anotheruser = "Rajput Vishal"
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com',target:'_blank'},
  'click me to visit google',
  anotheruser
);

ReactDOM.createRoot(document.getElementById('root')).
  render(
  
    <>
    <MyApp/>
    </>
    
);
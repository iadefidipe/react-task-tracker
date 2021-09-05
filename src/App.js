import React from "react";
import Header from "./components/Header";

function App() {

  const name = 'Israel'
  return (
    <div className="container">
      <Header  /> 
    </div>
  );
}

/*
? the title there is a prop type, can be used to pass info from the root component  to the component  for that element



 * if i wanted to use class based components, it is import the react module first 
class App extends React.Component{ //? so your app has access to all the methods in the component class
  render(){
    return <h1>Hello from React</h1>
  }
}
*/
export default App;

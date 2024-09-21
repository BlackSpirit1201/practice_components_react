import { useState } from 'react';
import './App.css';
import MyFirstComponent from './components/MyFirstComponent'
import SecondComponent from './components/SecondComponent'
import { ThirdComponent } from './components/ThirdComponent';
import { FourthComponent } from './components/FourthComponent';
import { Child } from './components/Child';


function App() {

  const [name, setName]= useState("Wilson Pedraza");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fundamentos de React</h1>
        <hr className="white-hr" />
        {/* <MyFirstComponent /> */}
        <hr className="white-hr" />
        {/* <SecondComponent /> */}
        <hr className="white-hr" />
        <ThirdComponent
          name="Wilson Pedraza"
          last_name="Pedraza"
          // age="20"
        />
        <FourthComponent
          
        />
        <hr className="white-hr" />
        <Child 
        name={name}
        setName={setName}
        />
        <hr className="white-hr" />      </header>
    </div>
  )
};

export default App  

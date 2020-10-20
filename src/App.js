import React,{useState} from 'react';
import Router from '@reach/router'
import './App.css';
import Input from './Components/Input'

function App() {
  const apiurl ="https://swapi.dev/api/";
 
  
  const [ state , setState] = useState({
    category: '',
    id: 0 ,
  })

  return (
    <div className="App">
      <Input state={state} setState={setState} />

   
     
    </div>
  );
}

export default App;

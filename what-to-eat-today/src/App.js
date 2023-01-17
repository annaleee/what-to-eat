import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';

function App() {
  const menu = ['热干面拌一切','泡菜饼','有啥拌啥饭','有啥丢啥汤面','有啥丢啥味增汤']
  const rest = ['China Palace','老地方','No Thai','碧都','Lan city','One Bowl','火锅陈']
  const [result,setResult] = useState('');

  function generateRest(){
    setResult(rest[Math.floor(Math.random()*menu.length)])
  }
  function generateMenu(){
    setResult(menu[Math.floor(Math.random()*menu.length)])
  }
  return (
    <div className="App">
      <p id="ResultArea">{result}</p>
      <div id="ButtonArea">
        <button className="Button" onClick={()=>generateRest()}> 
          <p>饭店</p>
        </button>
        <button className='Button' onClick={()=>generateMenu()}> 
          <p>菜谱</p>
        </button>
      </div>
    </div>
  );
}

export default App;


import './App.css';
import EmailList from './EmailList';
import EmailSender from './EmailSender';
import EmailSearch from './EmailSearch';
import React,{useState} from 'react';

function App() {
const[emailList,setEmailList]=useState([]);

  return (
    <div className="App">
        <EmailList emailList={emailList} setEmailList={setEmailList} />
        <EmailSender setEmailList={setEmailList} />
       <EmailSearch setEmailList={setEmailList} />
    </div>
  );
}

export default App;
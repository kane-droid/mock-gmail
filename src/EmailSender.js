import React,{useState} from "react";
import './EmailSender.css';

function EmailSender(props){
const [recipientText,setRecipientText]=useState("");
const [subjectText,setSubjectText]=useState("");
const [messageText,setMessageText]=useState("");
let url ='http://localhost:3001/emails'

return(
<form className="list" onSubmit={(e)=>{
    e.preventDefault();
    fetch('http://localhost:3001/send',{
       method:'POST',
       headers: {
          'Content-Type' : 'application/json',
       },
          body:JSON.stringify({
                sender:"jane@galvanize.com",
                recipient: recipientText,
                subject: subjectText,
                message: messageText
          })
     })
     .then((response)=>response.json())
     .then((data)=>{
       fetch(url)
                   .then(response => {
                       return response.json();
                   })
                   .then(data => {
                       props.setEmailList(data)
                       // return emailList;
                   });
       setRecipientText("");
       setMessageText("");
       setSubjectText("");
     })
     .catch((e)=>{
       console.log('Error:',e);
     })
          }} >
            <label>
                Email:
            <input
                className="list"
                type='email'
                name='email'
                value={recipientText} onChange={(e)=>{setRecipientText(e.target.value)}}
            />
            </label>
            <label>
                Subject:
            <input
                className="list"
                type='text'
                name='subject'
                value={subjectText} onChange={(e)=>{setSubjectText(e.target.value)}}
            />
            </label>
            <label>
                Message:
            <input
                className="list"
                type='text'
                name='message'
                value={messageText} onChange={(e)=>{setMessageText(e.target.value)}} />
            </label>
    <button type = "submit">Send Email</button>
</form>
)}
export default EmailSender;
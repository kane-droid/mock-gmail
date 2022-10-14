import logo from './logo.svg';
import './App.css';
import EmailList from './EmailList';
import {useState} from "react";

function App() {
    const [recipientText, setRecipientText] = useState("");
    const [subjectText, setSubjectText] = useState("");
    const [messageText, setMessageText] = useState("");

    const saveEmail = (e) => {
        e.preventDefault();
        fetch("http://localhost:3001/send", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sender: "jane@galvanize.con",
                recipient: recipientText,
                subject: subjectText,
                message: messageText
            })
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => console.log(data));
    }

  return (
      <>
          <h1>Mock Gmail</h1>
          <div className="App">
              <EmailList/>
              <form onSubmit={(e) => saveEmail(e)}>
                  <input type='email' id='recipient' name='email' placeholder='Recipient email' value={recipientText}
                  onChange={(event) => {setRecipientText(event.target.value)}}/>
                  <input type='text' id='subject' name='subject' placeholder='Subject'value={subjectText}
                  onChange={(event) => {setSubjectText(event.target.value)}}/>
                  <input type='text' id='message' name='message' placeholder='Message' value={messageText}
                  onChange={(event) => {setMessageText(event.target.value)}}/>
                  <button type="submit">Send Email</button>
              </form>
          </div>
      </>
  );
}

export default App;
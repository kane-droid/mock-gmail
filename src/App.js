import logo from './logo.svg';
import './App.css';
import EmailList from './EmailList';

function App() {
  return (
      <>
          <h1>Mock Gmail</h1>
          <div className="App">
              <EmailList/>
              <form>
                  <input type='email' id='sender' name='email' value='Senders email' onClick={() =>
                      document.getElementById("sender").value = ""}/>
                  <input type='text' id='subject' name='subject' value='subject' onClick={() =>
                      document.getElementById("subject").value = ""}/>
                  <input type='text' id='message' name='message' value='message' onClick={() =>
                      document.getElementById("message").value = ""}/>
                  <button type="submit" href='http://localhost:3001/emails/send'>Send Email</button>
              </form>
          </div>
      </>
  );
}

export default App;


import logo from './logo.svg';
import './App.css';
import EmailList from './EmailList';

function App() {
  return (
    <div className="App">
        <EmailList />
        <form>
            <input type='email' id='sender' name='email' value='Senders email'/>
            <input type='text' id='subject' name='subject' value='subject'/>
            <input type='text' id='message' name='message' value='message'/>
            <button type = "submit" href='http://localhost:3001/emails/send'>Send Email</button>
        </form>
    </div>
  );
}

export default App;


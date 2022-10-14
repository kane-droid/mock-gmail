import React, {useEffect, useState} from "react";
import './EmailList.css'


const EmailList = (props) =>{
    const[emailList,setEmailList]=useState([]);
    const[email, setEmail] = useState({});
    const[clickedId, setClickedId] = useState(null);
    let url = 'http://localhost:3001/emails';

useEffect(()=> {
    // Might want to put this in a function
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setEmailList(data)
            })
    },[])

    // loop through the object
    // return an <li> for each element

    return(
        <div >
           {emailList.map((element) => {
               if (clickedId === element.id) {
                   return   <li className='list-expanded' key = {element.id}>
                       Subject: {element.subject}
                       {" "}
                       Sender: {element.sender}
                       {" "}
                       Date: {element.date}
                       {" "}
                       Message: {element.message}
                            </li>
               } else {
                   return <li className='list' key={element.id} onClick={() => {
                       setClickedId(element.id);
                       let url = `http://localhost:3001/emails/${element.id}`;
                       fetch(url)
                           .then(response => {
                               return response.json();
                           })
                           .then(data => {
                               setEmail(data)
                               // return specific email;
                           })
                   }}>
                       Subject: {element.subject}
                       {" "}
                       Sender: {element.sender}
                       {/*{console.log(email)}*/}
                   </li>
               }
           })}
        </div>
    )
}
export default EmailList;
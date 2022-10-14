import React,{useState} from "react";

function EmailSearch(props){
    const[subjectText,setSubjectText]=useState("");
    let url = `http://localhost:3001/search?query=${subjectText}`;
console.log(props);
    const getSearchItem=()=>{
        fetch(url)
        .then(res => res.json())
        .then((data)=>{
            props.setEmailList(data);
            console.log(data);
        })
    }
    return(
        <form  onSubmit={(e)=>{
            e.preventDefault();
            {getSearchItem()}
        }}
        >
            <label>
                Subject Search:
            <input 
                type='text' 
                name='subject' 
                value={subjectText} 
                onChange={(e)=>{setSubjectText(e.target.value)}}/>
            </label>
            <button type="submit">Search</button>
        </form>
    )
}
export default EmailSearch
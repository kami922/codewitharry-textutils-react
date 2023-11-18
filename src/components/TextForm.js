import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpperClick = () => {
      console.log("Uppercase was clicked");
      let newtext = text.toUpperCase();
      setText(newtext);
    }
  const handleOnChange = (event) => {
    console.log("Uppercase was clickd");
    setText(event.target.value)
  }

  const handleLowerClick=()=> {
    console.log("Lowercase was clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  const [text,setText] = useState("Enter text here")
//   setText("set text funtion");
  return (
    <>

    <div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <label for="myarea" className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} onChange={handleOnChange}  id="myarea" rows="3"></textarea>
    </div>
    <button className='btn btn-primary mx-3 ' onClick={handleUpperClick} >  Convert to uppercase </button>      
    <button className='btn btn-primary mx-3' onClick={handleLowerClick} > Convert to lower case </button>
    </div>
    <div className='container my-3'>
    <h1> your text summary </h1>
    <p> {text.split(" ").length} words and {text.length} characters </p>
    <p> {0.0008*text.split(" ").length} Mintues read </p>
    </div>
    </>
  )
}
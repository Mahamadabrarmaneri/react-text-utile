import React, {useState} from 'react';

export default function TextForm(props) {
    
    const handleUpClick= () => {
        let newText = text.toUpperCase();
        setText(newText);
    };  
    
    const handleLowClick= () => {
        let newText = text.toLowerCase();
        setText(newText);
    };
    
    const handleOnChange= (event) => {
        setText(event.target.value);
    };

    const countWords = (text) => {
        const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
        return wordCount;
    };

    const calculateReadingTime = (wordCount) => {
        const readingTimeInMinutes = wordCount / 200;
        return readingTimeInMinutes.toFixed(3);
    };

    const [text, setText] = useState('');

    return (
        <>
            <div className='container'>
                    <div className="mb-3">
                        {/* <label htmlFor="MyText" className="form-label">{props.heading}</label> */}
                        <textarea className="form-control" onChange={handleOnChange} id="exampleTextarea" value={text} rows="10" placeholder='Enter text here...'> </textarea>
                    </div>
                    <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to LowerCase</button>
            </div>
            <br />
            <br />
            <div className="container my-3">
                <h2>Text Summary</h2>
                <p>{countWords(text)} Words and {text.length} Characters</p>
                <p>Estimated reading time: {calculateReadingTime(countWords(text))} minutes</p>
                <h2>Priview</h2>
                <p>{text.slice(0, 100)}</p>
            </div>
        </>
    );
}

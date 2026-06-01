import '../styles/Test.css';
import React, {useState} from 'react';

const Test = () => {
    const display = () =>
    {
        alert("hello")
    }
    const [isVisible, setIsVisible] = useState(false);
    return(
        <div class="home">

            <h1>Welcome to Test Page</h1>

            <button class="btn1" onClick={display}>button 1</button>
        
            <button class="btn2" onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Hide' : 'Show'}
            </button>
        {isVisible &&
         <p>This is a paragraph</p>
        }

        </div>
    );
}           

export default Test;
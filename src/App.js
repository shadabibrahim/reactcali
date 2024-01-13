import React, { useState } from "react";

const App = () => {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [result, setResult] = useState();
    const [error, setError] = useState("");
    let validation = (op) => {
        if (inputValue1 === "" || inputValue2 === "") {
            setResult("");
            setError("Both fields are required!");
            return

        }
        if (isNaN(inputValue1) || isNaN(inputValue2)) {
            setResult("");
            setError("Please enter valid numbers.");
        }
        else {
            setError("");
            switch (op) {
                case '+':
                    setResult(parseInt(inputValue1) + parseInt(inputValue2))
                    break;
                case '-':
                    setResult(parseInt(inputValue1) - parseInt(inputValue2))
                    break;
                case '*':
                    setResult(parseInt(inputValue1) * parseInt(inputValue2))
                    break;
                case '/':
                    setResult(parseInt(inputValue1) / parseInt(inputValue2))
                    break;
                default:
                    break;
            }

        }
    }

    return (
        < div className="container" >
            <div className="calculator">
                <h1>React Calculator</h1>
                <input type="text" className="inp" onChange={(e) => setInputValue1(e.target.value)} />
                <input type="text" className="inp" onChange={(e) => setInputValue2(e.target.value)} />
                <div className="btn">
                    <button className="btn-grad" onClick={() => validation('+')}>+</button>
                    <button className="btn-grad" onClick={() => validation('-')}>-</button>
                    <button className="btn-grad" onClick={() => validation('*')}>*</button>
                    <button className="btn-grad" onClick={() => validation('/')}>/</button>

                </div>
                {
                    error && (<div style={{ color: 'red' }}>Error!<br></br>{error}</div>)
                }
                {result && (
                    <div style={{ color: 'green' }}>
                        Success! <br />
                        Result: {result.toFixed()}
                    </div>
                )}
            </div>
        </div >
    );
}
export default App;
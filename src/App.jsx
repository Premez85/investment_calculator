import InputGroup from "./components/InputGroup";
import Header from "./components/Header";
import Result from "./components/Result";
import {useState} from "react";

function App() {

    const [result, setResult] = useState(null);
    function getResult(obj) {
        setResult(obj);
    }

    return (
        <>
            <Header/>
            <main id="user-input">
                <InputGroup getResult={getResult}/>
            </main>
            <Result obj={result}/>
        </>

    )
}

export default App

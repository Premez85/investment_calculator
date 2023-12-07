import Input from "./components/Input";

const INPUT_FIELDS = [

    {
        inputOne: ['initialInvestment', 'Initial Investment'],
        inputTwo: ['annualInvestment', 'Annual Investment'],
    },


    {
        inputOne: ['expectedReturn', 'Expected Return'],
        inputTwo: ['duration', 'Duration']
    },

]
import Header from "./components/Header";
import Result from "./components/Result";
import {useState} from "react";
import {calculateInvestmentResults} from './util/investment';

function App() {
    const [formData, setFormData] = useState({
        initialInvestment: '',
        annualInvestment: '',
        expectedReturn: '',
        duration: ''
    })
    const [result, setResult] = useState(null);

    function cleanError() {
        const labels = document.querySelectorAll('.input-group label')
        labels.forEach(val => {
            if (val.classList.contains('empty-field')){
                val.classList.remove('empty-field');
            }
        })
    }

    function checkData(obj) {
        cleanError();
        let error = false;
        for(let key in obj) {
            if(!obj[key]) {
                document.querySelector(`input[name=${key}]`).parentNode.classList.add('empty-field');
                error = true;
            }
        }
        if(!error) {
            return true
        }

    }
    function handleSubmit(e) {
        e.preventDefault();
        if(checkData(formData)) {
            setResult(calculateInvestmentResults(formData));
        }
    }
    function handleChange(e) {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        } ))
    }
    return (
        <>
            <Header/>
            <main id="user-input">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label >Initial Investment
                            <input className='empty-field' type="number" name='initialInvestment' value={formData.initialInvestment} onChange={handleChange}/>
                            <p className='error'>Please fill out this field</p>
                        </label>

                        <label >Annual Investment
                            <input type="number" name='annualInvestment' value={formData.annualInvestment} onChange={handleChange}/>
                            <p className='error'>Please fill out this field</p>
                        </label>
                    </div>
                    <div className="input-group">
                        <label >Expected Return
                            <input type="number" name='expectedReturn' value={formData.expectedReturn} onChange={handleChange}/>
                            <p className='error'>Please fill out this field</p>
                        </label>

                        <label >Duration
                            <input type="number" name='duration' value={formData.duration} onChange={handleChange}/>
                            <p className='error'>Please fill out this field</p>
                        </label>
                    </div>
                    <button type='submit' style={{display: 'none'}}>Submit</button>
                </form>
            </main>
            <Result obj={result}/>
        </>

    )
}

export default App

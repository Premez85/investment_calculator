import {useState} from "react";
import {calculateInvestmentResults} from "../util/investment";

export default function InputGroup({getResult}) {
    const [formData, setFormData] = useState({
        initialInvestment: null,
        annualInvestment: null,
        expectedReturn: null,
        duration: null
    })

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

    function checkValue(val) {
        return val? val: '';
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(checkData(formData)) {
            getResult(calculateInvestmentResults(formData));
        }
    }
    function handleChange(e) {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: +value
        } ))
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label >Initial Investment
                    <input className='empty-field' type="number" name='initialInvestment' value={checkValue(formData.initialInvestment)} onChange={handleChange}/>
                    <p className='error'>Please fill out this field</p>
                </label>

                <label >Annual Investment
                    <input type="number" name='annualInvestment' value={checkValue(formData.annualInvestment)} onChange={handleChange}/>
                    <p className='error'>Please fill out this field</p>
                </label>
            </div>
            <div className="input-group">
                <label >Expected Return
                    <input type="number" name='expectedReturn' value={checkValue(formData.expectedReturn)} onChange={handleChange}/>
                    <p className='error'>Please fill out this field</p>
                </label>

                <label >Duration
                    <input type="number" name='duration' value={checkValue(formData.duration)} onChange={handleChange}/>
                    <p className='error'>Please fill out this field</p>
                </label>
            </div>
            <button type='submit' style={{display: 'none'}}>Submit</button>
        </form>
    );
}
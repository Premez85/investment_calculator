import Input from './Input';
import {useState} from "react";

export default function InputGroup({inputOne, inputTwo}) {
    const [formData, setFormData] = useState({})
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
    }
    function handleChange(e) {
        const {title, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [title]: value
        } ))
    }

    return (
        <form className="input-group" onSubmit={handleSubmit}>
            <Input key={inputOne[0]} title={inputOne[0]} name={inputOne[1]} handleChange={handleChange} />
            <Input key={inputTwo[0]} title={inputTwo[0]} name={inputTwo[1]} handleChange={handleChange} />
        </form>
    );
}
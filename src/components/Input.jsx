export default function Input({title, name, handleChange}) {
    return (
        <label htmlFor={title} >{title}
            <input type="number" id={name} name={name} onChange={handleChange}/>
        </label>
    );
}
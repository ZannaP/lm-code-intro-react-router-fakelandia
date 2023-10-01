import {useState} from 'react';
import InputSubject from './input-subject';
import ReasonDropdown from "./reason-dropdown"; // Import the InputSubject component
import ("./forms.scss");

const ConfessForm: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [errorInput, setErrorInput] = useState<string>('');
    const [selectValue, setSelectValue] = useState('');
    const [errorSelect, setErrorSelect] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        setErrorInput('');
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectValue(value);
        setErrorSelect('');
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (inputValue.trim() === '') {
            setErrorInput('Subject cannot be empty');
        } else {
            console.log('Submitted:', inputValue);
        }

        if (selectValue.trim() === '') {
            setErrorSelect('Please select a reason for contact');
        } else {
            console.log('Submitted:', selectValue);
        }
    };

    return (
        <div className={"the-container"}>
            <form onSubmit={handleSubmit}>
                <InputSubject value={inputValue} onChange={handleInputChange}/>
                <div style={{color: 'red'}}>{errorInput}</div>
                <ReasonDropdown reasons={['I just want to talk', 'Other reason']} selected={selectValue}
                                onChange={handleSelectChange}/>
                <div style={{color: 'red'}}>{errorSelect}</div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ConfessForm;

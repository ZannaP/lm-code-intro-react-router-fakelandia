import {useState} from 'react';
import InputSubject from './input-subject';
import ReasonDropdown from "./reason-dropdown"; // Import the InputSubject component
import ("./forms.scss");

const ConfessForm: React.FC = () => {

    const [formData, setFormData] = useState({
        inputValue: '',
        selectValue: '',
    });
    const [errorInput, setErrorInput] = useState('');
    const [errorSelect, setErrorSelect] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

const validateForm = () => {
    // Implement your form validation logic here
    const {inputValue, selectValue} = formData;
    setIsFormValid(true);
    if (inputValue.trim() === '') {
        setErrorInput('Subject cannot be empty');
        setIsFormValid(false)
    }
    if (selectValue.trim() === '') {
        setErrorSelect('Please select a reason for contact');
        setIsFormValid(false)
    }
};
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({
        ...formData,
        inputValue: value,
    });
    setErrorInput('');
    validateForm();
};

const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFormData({
        ...formData,
        selectValue: value,
    });
    setErrorSelect('');
    validateForm();
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted:', formData.inputValue, formData.selectValue);
};

return (
    <div className={"the-container"}>
        <form onSubmit={handleSubmit}>
            <InputSubject value={formData.inputValue} onChange={handleInputChange}/>
            <div style={{color: 'red'}}>{errorInput}</div>
            <ReasonDropdown reasons={['I just want to talk', 'Other reason']} selected={formData.selectValue}
                            onChange={handleSelectChange}/>
            <div style={{color: 'red'}}>{errorSelect}</div>
            <button type="submit" disabled={!isFormValid}>Submit</button>
        </form>
    </div>
);
}
;

export default ConfessForm;

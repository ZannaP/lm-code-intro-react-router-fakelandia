import {useState, useEffect} from 'react';
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
        const {inputValue, selectValue} = formData;
        let valid = true;
        if (inputValue.trim() === '') {
           valid = false;
        }
        if (selectValue === '') {
            valid = false;
        }
        return valid;
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFormData({
            ...formData,
            inputValue: value,
        });
        setErrorInput('');
        if (value.trim() === '') {
            setErrorInput('Subject cannot be empty');
        }
        validateForm();
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setFormData({
            ...formData,
            selectValue: value,
        });
        setErrorSelect('');
        if (value === '') {
            setErrorSelect('Please select a reason for contact');
        }
        validateForm();
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submitted:', formData.inputValue, formData.selectValue);
    };

    useEffect(() => {
        setIsFormValid(validateForm());
        console.log('Updated formData:', formData);
    }, [formData]);

    return (
        <div className={"the-container"}>
            <form onSubmit={handleSubmit}>
                <InputSubject value={formData.inputValue} onChange={handleInputChange} />
                <div style={{color: 'red'}}>{errorInput}</div>
                <ReasonDropdown reasons={['I just want to talk', 'Other reason']}
                                selected={formData.selectValue}
                                onChange={handleSelectChange}/>
                <div style={{color: 'red'}}>{errorSelect}</div>
                <button type="submit" disabled={!isFormValid}>Submit</button>
            </form>
        </div>
    );
}


export default ConfessForm;

import {useState, useEffect} from 'react';
import InputSubject from './input-subject';
import ReasonDropdown from "./reason-dropdown";
import ConfessionText from "./confession-text"; // Import the InputSubject component
import ("./forms.scss");

const ConfessForm: React.FC = () => {

    const [formData, setFormData] = useState({
        inputValue: '',
        selectValue: '',
        confessionValue: '',
    });
    const [errorInput, setErrorInput] = useState('');
    const [errorSelect, setErrorSelect] = useState('');
    const [errorConfession, setErrorConfession] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = () => {
        const {inputValue, selectValue, confessionValue} = formData;
        let valid = true;
        if (inputValue.trim() === '') {
            valid = false;
        }
        if (selectValue === '') {
            valid = false;
        }
        if (confessionValue.trim().split(' ').length < 3) {
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

    const handleConfessionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setFormData({
            ...formData,
            confessionValue: value,
        });
        setErrorConfession('');
        if (value.trim().split(' ').length < 3) {
            setErrorConfession('Please write at least three words');
        }
        console.log(value.split(' ').length)
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
                <InputSubject value={formData.inputValue} onChange={handleInputChange}/>
                <div style={{color: 'red'}}>{errorInput}</div>
                <ReasonDropdown reasons={['I just want to talk', 'Other reason']}
                                selected={formData.selectValue}
                                onChange={handleSelectChange}/>
                <div style={{color: 'red'}}>{errorSelect}</div>
                <ConfessionText value={formData.confessionValue} onChange={handleConfessionChange}/>                <div style={{color: 'red'}}>{errorSelect}</div>
                <div style={{color: 'red'}}>{errorConfession}</div>

                <button type="submit" disabled={!isFormValid}>Submit</button>
            </form>
        </div>
    );
}


export default ConfessForm;

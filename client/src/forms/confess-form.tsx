import {useState, useEffect} from 'react';
import InputSubject from './input-subject';
import ReasonDropdown from "./reason-dropdown";
import ConfessionText from "./confession-text";
import {MISDEMEANOURS} from "../types/misdemeanours.types"; // Import the InputSubject component
import ("./forms.scss");

const ConfessForm: React.FC = () => {

    const [formData, setFormData] = useState({
        subject: '',
        reason: '-', //MisdemeanourKind | JustTalk,
        details: '',
    });
    const [errorInput, setErrorInput] = useState('');
    const [errorSelect, setErrorSelect] = useState('');
    const [errorConfession, setErrorConfession] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [formSubmittedMessage, setFormSubmittedMessage] = useState('');
    const [buttonHidden, setButtonHidden] = useState(false);

    const validateForm = () => {
        const {subject, reason, details} = formData;
        let valid = true;
        if (subject.trim() === '') {
            valid = false;
        }
        if (reason === '-') {
            valid = false;
        }
        if (details.trim().split(' ').length < 3) {
            valid = false;
        }
        return valid;
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFormData({
            ...formData,
            subject: value,
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
            reason: value,
        });
        setErrorSelect('');
        if (value === '-') {
            setErrorSelect('Please select a reason for contact');
        }
        validateForm();
    }

    const handleConfessionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setFormData({
            ...formData,
            details: value,
        });
        setErrorConfession('');
        if (value.trim().split(' ').length < 3) {
            setErrorConfession('Please write at least three words');
        }
        validateForm();
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/api/confess", {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setButtonHidden(true);
                setFormData({
                    subject: '',
                    reason: '-', //MisdemeanourKind | JustTalk,
                    details: '',
                })
                setFormSubmittedMessage("Confession received. Thank you.");
                setTimeout(() => {
                    setFormSubmittedMessage('');
                    setButtonHidden(false);
                }, 3500);
            } else {
                console.error('Failed to submit confession');
            }
        } catch (error) {
            console.error('Catch error while submitting confession', error);
        }
    }
    useEffect(() => {
        setIsFormValid(validateForm());
    }, [formData]);
    return (
        <div className={"the-container"}>
            <form onSubmit={handleSubmit}>
                <InputSubject value={formData.subject} onChange={handleInputChange}/>
                <div style={{color: 'red'}}>{errorInput}</div>
                <ReasonDropdown reasons={MISDEMEANOURS}
                                selected={formData.reason}
                                onChange={handleSelectChange}/>
                <div style={{color: 'red'}}>{errorSelect}</div>
                <ConfessionText value={formData.details} onChange={handleConfessionChange}/>
                <div style={{color: 'red'}}>{errorSelect}</div>
                <div style={{color: 'red'}}>{errorConfession}</div>

                <button type="submit" disabled={!isFormValid} className={buttonHidden ? 'hidden' : ''}>Submit</button>
                <div className={"font-bold"}>{formSubmittedMessage}</div>
            </form>
        </div>
    );
}

export default ConfessForm;

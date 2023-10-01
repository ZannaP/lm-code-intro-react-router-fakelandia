import { useState } from 'react';
import InputSubject from './input-subject'; // Import the InputSubject component
import ("./forms.scss");

const ConfessForm: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);

        // Clear the error message when the user starts typing
        setError('');
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (inputValue.trim() === '') {
            setError('Subject cannot be empty');
        } else {
            console.log('Submitted:', inputValue);
        }
    };

    return (
        <div className={"the-container"}>
            <form onSubmit={handleSubmit}>
                <InputSubject value={inputValue} onChange={handleInputChange} />

                <div style={{ color: 'red' }}>{error}</div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ConfessForm;

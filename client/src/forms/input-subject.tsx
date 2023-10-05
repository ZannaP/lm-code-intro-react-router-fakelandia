import ("./forms.scss");
export interface InputSubjectProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputSubject: React.FC<InputSubjectProps> = ({ value, onChange }) => {
    return (
        <div>
            <label htmlFor="inputField">Subject:</label>
            <input
                type="text"
                id="inputField"
                data-testid="inputField"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default InputSubject;

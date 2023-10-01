import ("./forms.scss");
interface InputSubjectProps {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}
const InputSubject: React.FC<InputSubjectProps> = ({ value, onChange }) => {
    return (
        <div>
            <label htmlFor="inputField">Subject:</label>
            <input
                type="text"
                id="inputField"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default InputSubject;
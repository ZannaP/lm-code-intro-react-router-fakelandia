import ("./forms.scss");

interface ConfessionTextProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ConfessionText: React.FC<ConfessionTextProps> = ({value, onChange}) => {
    return (
        <div>
            <label htmlFor="confessionText">Your message:</label>
            <textarea id="confessionText" name="confessionText" onChange={onChange}>
                {value}
            </textarea>
        </div>
    );
};

export default ConfessionText;
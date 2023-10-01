import ("./forms.scss");

interface ReasonDropdownProps {
    reasons: Array<string>;
    selected: string;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const ReasonDropdown: React.FC<ReasonDropdownProps> = ({reasons, selected, onChange}) => {
    return (
        <div>
            <label htmlFor="reasonSelect">Reason for contact:</label>
            <select name="reasonSelect" id="reasonSelect" onChange={onChange}>
                <option value="" disabled selected>Select one --</option>
                {reasons.map((e: string) => (
                    <option key={e} value={e} selected={e === selected}>
                        {e}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ReasonDropdown;
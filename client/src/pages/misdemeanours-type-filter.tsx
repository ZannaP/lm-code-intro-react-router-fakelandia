import ("../forms/forms.scss");

interface MisdemeanoursTypeFilterProps {
    types: string[];
    selected: string;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
}
const MisdemeanoursTypeFilter: React.FC<MisdemeanoursTypeFilterProps> = ({types, selected, onChange}) => {
    return (
        <div>
            <label htmlFor="misedemeanoursTypeSelect">Type of misedemeanour:</label>
            <select name="misedemeanoursTypeSelect" id="misedemeanoursTypeSelect" value={selected} onChange={onChange}>
                <option value="all">-- All --</option>
                {types.map((e: string) => (
                    <option key={e} value={e}>
                        {e}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default MisdemeanoursTypeFilter;

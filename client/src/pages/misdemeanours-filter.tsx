import {useState} from "react";
import {Misdemeanour} from "../types/misdemeanours.types";
import MisdemeanoursTypeFilter from "./misdemeanours-type-filter";
import ("../forms/forms.scss");

interface MisdemeanoursFilterProps {
    misdemeanours: Misdemeanour[]
    // selectedMisdemeanour: number;
    // selectedDate: number;
}

export const MisdemeanoursFilter: React.FC<MisdemeanoursFilterProps> = ({misdemeanours}) => {
    const [formData, setFormData] = useState({
        selectedMisdemeanour: -1,
        selectedDate: -1,
    });
    const handleTypeOfMisdemeanourChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = Number(e.target.value);
        setFormData({
            ...formData,
            selectedMisdemeanour: value,
        });

    }

    const uniqueMisdemeanors = [...new Set(misdemeanours.map((e) => e.misdemeanour))];

    return (
        <>
            <div>
                <MisdemeanoursTypeFilter types={uniqueMisdemeanors} selected={formData.selectedMisdemeanour} onChange={handleTypeOfMisdemeanourChange}/>
            </div>
        </>
    );
}

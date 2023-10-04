import {useState} from "react";
import {Misdemeanour} from "../types/misdemeanours.types";
import MisdemeanoursTypeFilter from "./misdemeanours-type-filter";

import ("../forms/forms.scss");

interface MisdemeanoursFilterProps {
    misdemeanours: Misdemeanour[]
    // selectedMisdemeanour: string;
    //selectedDate: number;
    onFilterChange: (e: Misdemeanour[]) => void;
}

export const MisdemeanoursFilter: React.FC<MisdemeanoursFilterProps> = ({
                                                                            misdemeanours,
                                                                            onFilterChange
                                                                        }) => {
    const [formData, setFormData] = useState({
        selectedMisdemeanour: "all",
        // selectedDate: -1,
    });
    const handleTypeOfMisdemeanourChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const filter = e.target.value;
        setFormData({
            ...formData,
            selectedMisdemeanour: filter,
        });
        const filteredData = misdemeanours.filter((e) =>
            filter === 'all' || e.misdemeanour === filter
        )
        onFilterChange(filteredData);
    }

    const uniqueMisdemeanors = [...new Set(misdemeanours.map((e) => e.misdemeanour))];

    return (
        <>
            <div>
                <MisdemeanoursTypeFilter types={uniqueMisdemeanors} selected={formData.selectedMisdemeanour}
                                         onChange={handleTypeOfMisdemeanourChange}/>
            </div>
        </>
    );
}

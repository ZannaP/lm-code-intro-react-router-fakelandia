import {useEffect, useState} from "react";
import {Misdemeanour} from "../types/misdemeanours.types";

export const Misdemeanours = () => {
    const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/misdemeanours/10")
            .then(response => response.json())
            .then((data:Misdemeanour[]) => setMisdemeanours(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [])
    console.log(misdemeanours)

    return (
        <div>
            {misdemeanours?.map((misdemeanour) => (
                <div key={misdemeanour?.citizenId}>
                    <p>Citizen ID: {misdemeanour?.citizenId}</p>
                    <p>Misdemeanour: {misdemeanour?.misdemeanour}</p>
                    <p>Date: {misdemeanour?.date}</p>
                </div>
            ))}
        </div>
    );
}
import {useEffect, useState} from "react";
import {Misdemeanour} from "../types/misdemeanours.types";

export const Misdemeanours = () => {
    const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([]);
    useEffect(() => {
        fetch("http://localhost:8080/api/misdemeanours/10")
            .then(response => response.json())
            .then((data) => {
                setMisdemeanours(data.misdemeanours);
            }).catch((error) => console.error("Error fetching data:", error));
    }, [])

    return (
        <div className={"the-container"}>
            <div className={"grid grid-cols-4 gap-8"}>
                <div>Citizen ID</div>
                <div>Misdemeanour</div>
                <div>Date</div>
                <div>Punishment idea</div>
            </div>
            {misdemeanours?.map((misdemeanour) => (
                <div key={misdemeanour?.citizenId} className={"grid grid-cols-4 gap-8"}>
                    <div>{misdemeanour?.citizenId}</div>
                    <div>{misdemeanour?.misdemeanour}</div>
                    <div>{misdemeanour?.date}</div>
                    <div>x</div>
                </div>
            ))}
        </div>
    );

}
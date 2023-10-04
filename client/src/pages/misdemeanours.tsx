import {useEffect, useState} from "react";
import {Misdemeanour} from "../types/misdemeanours.types";
import {MisdemeanoursFilter} from "./misdemeanours-filter";

export const Misdemeanours = () => {
    const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([]);
    const [misdemeanoursToShow, setMisdemeanoursToShow] = useState<Misdemeanour[]>([]);
    useEffect(() => {
        fetch("http://localhost:8080/api/misdemeanours/10")
            .then(response => response.json())
            .then((data) => {
                setMisdemeanours(data.misdemeanours);
                setMisdemeanoursToShow(data.misdemeanours);
            }).catch((error) => console.error("Error fetching data:", error));
    }, [])

    const handleFilterChange = (filteredData: Misdemeanour[]) => {
        setMisdemeanoursToShow(filteredData);
    };
    return (
        <section>
            <div className={"the-container"}>
                <h1>Misdemeanours</h1>
                <MisdemeanoursFilter misdemeanours={misdemeanours} onFilterChange={handleFilterChange}/>
                <div className={"grid grid-cols-4 gap-8 p-6"}>
                    <div>Citizen ID</div>
                    <div>Misdemeanour</div>
                    <div>Date</div>
                    <div>Punishment idea</div>
                </div>
                {misdemeanoursToShow?.map((misdemeanour) => {
                    const randomImageURL = `https://picsum.photos/150/100?random=${Math.random()}`;

                    return (
                        <div key={misdemeanour?.citizenId} className={"grid grid-cols-4 gap-8 p-6"}>
                            <div>{misdemeanour?.citizenId}</div>
                            <div>{misdemeanour?.misdemeanour}</div>
                            <div>{misdemeanour?.date}</div>
                            <div>
                                <img src={randomImageURL} alt={`${misdemeanour?.misdemeanour} punishment`}/>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

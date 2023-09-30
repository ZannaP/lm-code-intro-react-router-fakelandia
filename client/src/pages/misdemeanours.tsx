import {useEffect, useState} from "react";
import {Misdemeanour} from "../types/misdemeanours.types";

export const Misdemeanours = () => {
    const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([]);
    const [randomImage, setRandomImage] = useState<string>('https://fastly.picsum.photos/id/690/150/100.jpg?hmac=CShVFo9KmPvqR4nAO1h1MmnPkS9oCZlx1xD4LiCqfBU')
    useEffect(() => {
        fetch("http://localhost:8080/api/misdemeanours/5")
            .then(response => response.json())
            .then((data) => {
                setMisdemeanours(data.misdemeanours);
            }).catch((error) => console.error("Error fetching data:", error));
    }, [])

    return (
        <div className={"the-container"}>
            <div className={"grid grid-cols-4 gap-8 p-6"}>
                <div>Citizen ID</div>
                <div>Misdemeanour</div>
                <div>Date</div>
                <div>Punishment idea</div>
            </div>
            {misdemeanours?.map((misdemeanour) => {
                const randomImageURL = `https://picsum.photos/150/100?random=${Math.random()}`;

                return (
                    <div key={misdemeanour?.citizenId} className={"grid grid-cols-4 gap-8 p-6"}>
                        <div>{misdemeanour?.citizenId}</div>
                        <div>{misdemeanour?.misdemeanour}</div>
                        <div>{misdemeanour?.date}</div>
                        <div>
                            <img src={randomImageURL} alt={`${misdemeanour?.misdemeanour} punishment`} />
                        </div>
                    </div>
                );
            })}
        </div>
    );

}
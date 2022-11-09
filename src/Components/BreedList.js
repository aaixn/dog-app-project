import React from "react";

const BreedList = ({breeds, getBreeds}) => {


    return (
        <div className="breed-list">
            <h1>breeds</h1>
            <button onClick={getBreeds}>get breeds</button>
            <ul>
                {breeds && breeds.map((breedFamily, key) => {
                    return (
                        <ul key={key}>
                            <h3>{breedFamily[0]}</h3>
                            {breedFamily[1].length > 0 && breedFamily[1].map((breed, key) => {
                                return <p key={key}>-{breed}</p>
                            }) }
                        </ul>
                    )
                })}
            </ul>
        </div>
    )
}

export default BreedList
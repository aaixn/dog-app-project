import React, { useState } from "react";

const RandomDogs = ({setRandomDogBreed, getRandomDog, randomDog}) => {

    const [randomBreedInput, setRandomBreedInput] = useState('')

    const handleChange = (e) => {
        setRandomBreedInput(e.target.value)
    }

    const handleSubmit = () => {
        setRandomDogBreed(randomBreedInput)
        getRandomDog()
    }

    

    return(
        <div className="random-dog-pix">
            <h1>random dog pix</h1>
            <div className="form">
                <input type='text' placeholder="please enter a dog breed" onChange={handleChange}></input>
                <button onClick={handleSubmit}>get random dog</button>
            </div>
            {randomDog && <img src={randomDog} alt='dog'></img>}
        </div>
    )
}

export default RandomDogs
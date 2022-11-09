import './App.css';
import axios from 'axios';
import BreedList from './Components/BreedList';
import { useEffect, useState } from 'react';
import RandomDogs from './Components/RandomDogs';
import Header from './Components/Header';

function App() {
  const [breeds, setBreeds] = useState('')
  const [randomDogBreed, setRandomDogBreed] = useState()
  const [randomDog, setRandomDog] = useState()
  const [currrentView, setCurrentView] = useState()

  const setView = str => {
    setCurrentView(str)
  }
  
  const getBreeds = () => {
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then(res => (Object.entries(res.data.message)))
      .then(res => setBreeds(res))
  }

  useEffect(() => {
    getRandomDog()
  }, [randomDogBreed])


  const getRandomDog = () => {
    randomDogBreed &&
    axios.get(`https://dog.ceo/api/breed/${randomDogBreed}/images/random`)
      .then(res => setRandomDog(res.data.message))
      .catch(err => alert('that breed does not exist'))
  }


  return (
    <div className="App">
      <Header setView={setView}/>
      {currrentView === 'random dogs' ? <RandomDogs randomDogBreed = {randomDogBreed} randomDog = {randomDog} getRandomDog = {getRandomDog} setRandomDogBreed = {setRandomDogBreed}/> : <BreedList breeds = {breeds} getBreeds = {getBreeds}/>}
    </div>
  );
}

export default App;

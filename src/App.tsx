import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import BreedsSelect from './components/breedsSelect';
import BreedPhotos from "./components/breedPhotos";

import './styles/main.css';


export default function App() {
  const [breed, setDogBreed] = useState("");

  return (
    <Container className="my-5">
      <BreedsSelect onSelect={setDogBreed}></BreedsSelect>
      <BreedPhotos breed={breed}></BreedPhotos>
    </Container>
  );
}

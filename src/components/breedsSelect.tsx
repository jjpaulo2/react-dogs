import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';

import DogsApi from '../integrations/dogs';
import GetDogBreedsService from '../services/getDogBreeds';


function Options({ breeds }: { breeds: string[] }) {
  return (
    <>
      {
        breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))
      }
    </>
  );
}


export default function BreedsSelect({onSelect}: {onSelect: CallableFunction}) {
  const [breeds, setBreeds] = useState<string[]>([]);

  useEffect(() => {
    const getDogBreeds = async () => {
      const api = new DogsApi();
      const service = new GetDogBreedsService(api);
      setBreeds(await service.get());
    }
    if (breeds.length === 0) {
      getDogBreeds();
    }
  });

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    if (event.target.value !== "") {
      onSelect(event.target.value);
    }
  }

  return (
    <div className="mb-3 mx-2">
      <Form.Select onChange={handleChange}>
        <option value="">Selecione uma raça de cachorro</option>
        <Options breeds={breeds}/>
      </Form.Select>
    </div>
  );
}

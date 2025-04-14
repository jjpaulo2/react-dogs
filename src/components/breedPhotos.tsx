import { useEffect, useState } from "react";
import Image from 'react-bootstrap/Image';

import DogsApi from '../integrations/dogs';
import GetDogBreedPhotosService from "../services/getDogPhotos";


function Photos({ urls }: { urls: string[] }) {
  return (
    <>
      {
        urls.map((url) => (
          <Image src={url} className="photo img-thumbnail m-2"/>
        ))
      }
    </>
  );
  
}


export default function BreedPhotos({breed}: {breed: string}) {
  const [photos, setPhotos] = useState<string[]>([]);
  const [currentBreed, setCurrentBreed] = useState<string>(breed);

  useEffect(() => {
    const getPhotos = async () => {
      const api = new DogsApi();
      const service = new GetDogBreedPhotosService(api);
      setPhotos(await service.get(breed));
    }
    if (breed !== currentBreed) {
      setCurrentBreed(breed);
      getPhotos();
    }
  });

  return (
    <div className="d-flex flex-wrap justify-content-between">
      <Photos urls={photos} />
    </div>
  );
}

import DogsApi from "../integrations/dogs";


export default class GetDogBreedPhotosService {
    private api: DogsApi;

    constructor(api: DogsApi) {
        this.api = api;
    }

    async get(breed: string): Promise<string[]> {
        try {
            const [realBreed, subBreed] = breed.split(" ");

            if (subBreed) {
                console.log(realBreed, subBreed);
                const response = await this.api.getSubBreedPhotos(realBreed, subBreed);
                return response.message;
            }
            
            else {
                const response = await this.api.getBreedPhotos(breed);
                return response.message;
            }

        } catch (error) {
            throw new Error(`Failed to fetch dog breeds: ${error}`);
        }
    }
}
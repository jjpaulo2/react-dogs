
type GetAllBreedsResponse = {
    message: Record<string, string[]>;
    status: string;
}

type GetBreedPhotosResponse = {
    message: string[];
    status: string;
}

export default class DogsApi {
    private baseUrl: string;

    constructor(baseUrl: string = 'https://dog.ceo/api') {
        this.baseUrl = baseUrl;
    }

    async getAllBreeds(): Promise<GetAllBreedsResponse> {
        try {
            const response = await fetch(`${this.baseUrl}/breeds/list/all`);
            if (!response.ok) {
                throw new Error(`Error fetching dog breeds: ${response.statusText}`);
            }
            return await response.json();

        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getBreedPhotos(breed: string): Promise<GetBreedPhotosResponse> {
        try {
            const response = await fetch(`${this.baseUrl}/breed/${breed}/images`);
            if (!response.ok) {
                throw new Error(`Error fetching breed photos: ${response.statusText}`);
            }
            return await response.json();

        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getSubBreedPhotos(breed: string, subbreed: string): Promise<GetBreedPhotosResponse> {
        try {
            const response = await fetch(`${this.baseUrl}/breed/${breed}/${subbreed}/images`);
            if (!response.ok) {
                throw new Error(`Error fetching subbreed photos: ${response.statusText}`);
            }
            return await response.json();

        } catch (error) {
            console.error(error);
            throw error;
        }
    }

}

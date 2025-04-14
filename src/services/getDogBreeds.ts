import DogsApi from "../integrations/dogs";


export default class GetDogBreedsService {
    private api: DogsApi;

    constructor(api: DogsApi) {
        this.api = api;
    }

    async get(): Promise<string[]> {
        let breeds: string[] = [];

        try {
            const response = await this.api.getAllBreeds();

            for (const [breed, subBreeds] of Object.entries(response.message)) {
                if (subBreeds.length > 0) {
                    for (const subBreed of subBreeds) {
                        breeds.push(`${breed} ${subBreed}`);
                    }
                }

                else {
                    breeds.push(breed);
                }
            }

            return breeds;

        } catch (error) {
            throw new Error(`Failed to fetch dog breeds: ${error}`);
        }
    }
}
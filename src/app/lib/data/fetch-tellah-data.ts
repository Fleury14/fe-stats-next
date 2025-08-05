import { TLPlayerRaceResponse } from "../interfaces";

async function fetchTLUserRaces(description: string) {
    const response: Response = await fetch(`https://free-enterprise-info-api.herokuapp.com/api/Races?offset=0&limit=10&description=${description}`);
    if (!response.ok) {
        console.error('Error during User race list (TL)');
        return null;
    } else {
        const result:Promise<TLPlayerRaceResponse[]> = response.json();
        return result;
    }
}

export { fetchTLUserRaces };
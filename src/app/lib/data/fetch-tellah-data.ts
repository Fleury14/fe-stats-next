import { TLPlayerRaceResponse } from "../interfaces";

async function fetchTLUserRaces(id: string) {
    const response: Response = await fetch(`https://free-enterprise-info-api.herokuapp.com/api/Racers/${id}/races?offset=0&limit=10`);
    if (!response.ok) {
        console.error('Error during User race list (TL)');
        return null;
    } else {
        const result:Promise<TLPlayerRaceResponse[]> = response.json();
        return result;
    }
}

export { fetchTLUserRaces };
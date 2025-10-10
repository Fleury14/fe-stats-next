import { TLHead2HeadRace, TLPlayerRaceResponse, UserSearchResponse } from "../interfaces";

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

async function fetchTLUserSearch(name: string) {
    const response: Response = await fetch(`https://free-enterprise-info-api.herokuapp.com/api/Racers/racetime-search?name=${name}`);
    if (!response.ok) {
        console.error('Error returning user search', name)
        return "";
    } else {
        const result:Promise<UserSearchResponse> = response.json();
        return result;
    }
}

async function fetchTLH2H(id1: string, id2: string) {
    const response: Response = await fetch(`https://free-enterprise-info-api.herokuapp.com/api/Racers/${id1}}/head-to-head/${id2}`);
    if (!response.ok) {
        console.error('Error returning user search', name)
        return "";
    } else {
        const result:Promise<TLHead2HeadRace[]> = response.json();
        return result;
    }
}

export { fetchTLUserRaces, fetchTLUserSearch, fetchTLH2H };